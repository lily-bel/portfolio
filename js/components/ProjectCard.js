export function ProjectCard(project, index) {
    const isWide = project.wideImages || false;
    const cardClass = isWide 
        ? 'w-[95%] sm:w-[90%] aspect-[16/9]' 
        : 'w-[65%] sm:w-[45%] lg:w-[40%] aspect-[9/16]';

    const imagesHtml = project.images.map(img => `
        <div class="snap-center shrink-0 ${cardClass} rounded-sm bg-charcoal/5 overflow-hidden relative shadow-sm border border-charcoal/10 cursor-zoom-in">
            <img src="${img}" class="object-cover w-full h-full" alt="${project.title}">
        </div>
    `).join('');

    const animationDelay = 0.1 + (index * 0.1);
    const galleryId = `gallery-${project.id}`;

    return `
        <article class="mb-12 fade-enter" style="animation-delay: ${animationDelay}s; opacity: 0;">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-x-4 gap-y-1">
                <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-0.5">
                    <h2 class="text-xl md:text-2xl font-lora font-medium tracking-tight text-charcoal">${project.title}</h2>
                    <span class="font-sans text-[10px] sm:text-xs font-normal text-charcoal/40 uppercase tracking-wider">${project.year}</span>
                </div>
                <p class="text-[10px] text-charcoal/60 uppercase tracking-wide font-medium text-left sm:text-right shrink-0">${project.subtitle}</p>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 border-t border-charcoal/20 pt-4 items-start">
                <!-- Text Column -->
                <div class="md:w-5/12 shrink-0">
                    <div class="text-xs leading-relaxed font-light text-justify text-charcoal/80">
                        ${project.description}
                    </div>
                </div>
                
                <!-- Image gallery (Horizontal Scroll) -->
                <div class="md:w-7/12 flex-grow relative group w-full">
                    <button data-target="${galleryId}" class="scroll-btn-left hidden absolute left-2 top-[calc(50%-8px)] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-canvas/90 backdrop-blur-sm shadow border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-white transition-all focus:outline-none" aria-label="Scroll left">
                        <svg class="w-4 h-4 pr-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button data-target="${galleryId}" class="scroll-btn-right hidden absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-canvas/90 backdrop-blur-sm shadow border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-white transition-all focus:outline-none" aria-label="Scroll right">
                        <svg class="w-4 h-4 pl-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    
                    <div id="${galleryId}" class="gallery-container flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar w-full scroll-smooth">
                        ${imagesHtml}
                    </div>
                </div>
            </div>
        </article>
    `;
}
