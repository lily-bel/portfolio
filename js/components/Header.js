export function Header() {
    return `
        <header class="mb-6 fade-enter">
            <div class="relative rounded-sm overflow-hidden p-4 md:p-5 flex flex-col justify-center min-h-[80px] border border-charcoal/10 shadow-sm">
                <div class="absolute inset-0">
                    <img src="./header2.png" alt="Header Background" class="w-full h-full object-cover">
                </div>
                
                <div class="relative z-10 w-full flex flex-col md:flex-row md:items-baseline md:justify-between text-white">
                    <div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                        <h1 class="font-lora text-2xl md:text-3xl font-medium tracking-tight">Lily Lima</h1>
                        <p class="font-sans font-medium uppercase tracking-[0.2em] text-white/70 text-[10px]">Portfolio</p>
                    </div>
                </div>
            </div>
        </header>
    `;
}
