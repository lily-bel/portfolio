export function Navigation() {
    return `
        <nav class="mb-6 border-t border-b border-charcoal/10 py-2 fade-enter" style="animation-delay: 0.1s; opacity: 0;">
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start">
                <p class="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 hidden sm:block">Directory</p>
                <div class="w-[1px] h-3 bg-charcoal/20 hidden sm:block"></div>
                <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
                    <a href="#software" class="text-xs font-medium hover:text-accent transition-colors flex items-center">
                        Software & Web
                    </a>
                    <a href="#xr" class="text-xs font-medium hover:text-accent transition-colors flex items-center">
                        XR & Game Development
                    </a>
                    <a href="#data" class="text-xs font-medium hover:text-accent transition-colors flex items-center">
                        Language & Data
                    </a>
                </div>
            </div>
        </nav>
    `;
}
