import { Header } from './components/Header.js';
import { Navigation } from './components/Navigation.js';
import { ProjectCard } from './components/ProjectCard.js';
import { projects, categories } from './data.js';

const app = document.getElementById('app');

function initializeGalleries() {
    const galleries = document.querySelectorAll('.gallery-container');
    
    galleries.forEach(gallery => {
        const leftBtn = document.querySelector(`.scroll-btn-left[data-target="${gallery.id}"]`);
        const rightBtn = document.querySelector(`.scroll-btn-right[data-target="${gallery.id}"]`);
        
        if (!leftBtn || !rightBtn) return;

        const updateButtons = () => {
            // maxScrollLeft = total scrollable width - visible width
            const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
            
            // Show left button if we have scrolled right at all
            if (gallery.scrollLeft > 5) {
                leftBtn.classList.remove('hidden');
            } else {
                leftBtn.classList.add('hidden');
            }

            // Hide right button if we are at the end, otherwise show it
            if (gallery.scrollLeft >= maxScrollLeft - 5) {
                rightBtn.classList.add('hidden');
            } else {
                rightBtn.classList.remove('hidden');
            }
            
            // If the content isn't wide enough to scroll at all, hide both
            if (gallery.scrollWidth <= gallery.clientWidth) {
                leftBtn.classList.add('hidden');
                rightBtn.classList.add('hidden');
            }
        };

        // Add listeners
        gallery.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);

        // Initial check (slight timeout to allow DOM/images to size correctly)
        setTimeout(updateButtons, 150);

        // Scroll handlers
        leftBtn.addEventListener('click', () => {
            // Scroll by one image width roughly (50% of container)
            gallery.scrollBy({ left: -(gallery.clientWidth * 0.5), behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: gallery.clientWidth * 0.5, behavior: 'smooth' });
        });
    });
}

function render() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const isCategoryView = hash && categories[hash];

    let contentHtml = '';

    if (isCategoryView) {
        const filteredProjects = projects.filter(p => p.categories.includes(hash));
        const cardsHtml = filteredProjects.map((p, index) => ProjectCard(p, index)).join('');
        
        contentHtml = `
            ${Header()}
            
            <div class="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-charcoal/10 pb-2 fade-enter" style="animation-delay: 0.1s; opacity: 0;">
                <div class="flex items-center gap-4">
                    <a href="#" class="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                        &larr; Directory
                    </a>
                    <h2 class="text-xl font-lora text-charcoal">${categories[hash]}</h2>
                </div>
            </div>

            <div>
                ${cardsHtml}
            </div>
        `;
    } else {
        // Landing view
        contentHtml = `
            ${Header()}
            ${Navigation()}
        `;
    }

    app.innerHTML = contentHtml;
    window.scrollTo(0, 0);

    // Initialize the gallery scroll logic if we are viewing projects
    if (isCategoryView) {
        // Delay logic attachment slightly so DOM is perfectly mounted
        setTimeout(initializeGalleries, 50);
    }
}

// Lightbox Event Listeners for Full Size Images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Attach click event to the app root using event delegation to catch any image click
app.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-container img');
    if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        // Open lightbox with scale transition
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
        
        // Small timeout for CSS transition scale-95 -> scale-100
        setTimeout(() => {
            lightboxImg.classList.remove('scale-95');
            lightboxImg.classList.add('scale-100');
        }, 10);
    }
});

// Close lightbox on click
lightbox?.addEventListener('click', () => {
    if (lightbox && lightboxImg) {
        lightboxImg.classList.remove('scale-100');
        lightboxImg.classList.add('scale-95');
        
        // Hide after scale animation completes
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.body.style.overflow = ''; // Restore background scrolling
        }, 150);
    }
});

// Intercept link clicks to prevent the browser from snapping/jumping to hash targets
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetHash = link.getAttribute('href');
        
        if (window.location.hash !== targetHash) {
            history.pushState(null, null, targetHash);
            render();
        }
    }
});

// Re-render when browser back/forward buttons are pressed
window.addEventListener('popstate', render);

// Initial rendering on page load
render();
