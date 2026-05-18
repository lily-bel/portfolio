export const categories = {
    'software': 'Software & Web Development',
    'xr': 'XR & Game Development',
    'data': 'Language & Data Science'
};

export const projects = [
    {
        id: 'cherokee-dictionary-app',
        title: 'Cherokee Dictionary and Corpus App',
        link: 'https://github.com/lily-bel/cherokee-corpus-app',
        year: '2024-2026',
        subtitle: 'React, JS, HTML • Web, Mobile, Data, Language',
        categories: ['software', 'data'],
        description: `A comprehensive Cherokee language app built in React for web and mobile, using lexical data compiled from various sources.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Dictionary with multiple sources (<a href="https://cherokeenationdictionary.net/">CED</a>, <a href="https://www.cherokeedictionary.net/">online dictionary</a>, etc), <a href="https://github.com/CharlieMcVicker/king-recreation">root-word integration</a> and audio for CED, and robust search options.</li>
<li>Tools to create custom dictionaries, conjugations, audio, sentences, etc.</li>
<li>Feature-rich full text reader with glossing. Link words to dictionary entries and create word-level notes in context.</li>
<li>Import/Export for custom packages (words/sentences/glosses/audio/etc) with color coding for package management.</li>
<li>WIP study tools (custom word lists, widgets with study exercises, etc).</li>
</ul>`,
        images: [
            './images/corpus1.jpg',
            './images/corpus2.jpg',
            './images/corpus3.jpg',
            './images/corpus4.jpg'
        ]
    },
    {
        id: '2d-gaussian-splatting-shader',
        title: '2D Gaussian Splatting Shader',
        link: 'https://github.com/lily-bel/Painterly-2DGS-For-Unity',
        year: '2026',
        subtitle: 'HLSL, C# • Unity, Game Development',
        categories: ['xr', 'software'],
        description: `A fast <a href="https://surfsplatting.github.io/">2D Gaussian Splatting</a> shader implementation for Unity with brushstroke texture options.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>ShaderLab/HLSL materials for rendering point clouds with 2x2 texture atlas and single texture options.</li>
<li>Uses dithering to avoid transparency sorting issues and improve performance.</li>
<li>Custom mipmapping editor tools for fine adjustments to brushstroke / gaussian textures.</li>
</ul>`,
        images: [
            './images/2dgs.gif'
        ],
        wideImages: true
    },
    {
        id: 'learn-cherokee-syllabary',
        title: 'Learn Cherokee Syllabary',
        link: 'https://play.google.com/store/apps/details?id=com.LilyBelmira.LearnCherokeeSyllabary&hl=en_US',
        year: '2023',
        subtitle: 'C#, Unity • Language, Mobile, Web',
        categories: ['software', 'data'],
        description: `A free app to practice tracing, writing, and reading the Cherokee syllabary. Originally created using Unity + C#, now switched over to React.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Tracing mode allows learners to write the syllabary by hand, with or without a reference.</li>
<li>Reading mode tests learners ability to read syllabary characters and type the correct phonetic representation.</li>
<li>Can be used by both Cherokee learners and Speakers who cannot write in syllabary, and is ideal for technology-integrated educational environments.</li>
<li>Recommended in some second-language Cherokee classes as a self-study tool and has 2000+ installs on Android and iOS devices.</li>
</ul>`,
        images: [
            './images/syllabary1.jpg',
            './images/syllabary2.jpg',
            './images/syllabary3.jpg',
            './images/syllabary4.jpg'
        ]
    },
    {
        id: 'cherokee-language-resources',
        title: 'Cherokee Language Learning and Access Resources',
        year: '2022 - PRESENT',
        subtitle: 'Python, JS • Language, Data',
        categories: ['software', 'data'],
        description: `Various projects to improve access to Cherokee learning resources and assist second-language learners in rapidly acquiring technically and linguistically complex aspects of the language.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Compiled downloadable, multimedia <a href="https://drive.google.com/drive/folders/18DiLX00MYoS9xawvgVy3vEQt0V411Zah">flashcards</a> utilizing Wyman Kirk’s verb conjugation book + CED sentence examples, using Python libraries and manual processing to process data and generate English conjugations for 9000+ conjugations of 400+ verbs.</li>
<li>Built a <a href="https://discord.com/oauth2/authorize?client_id=1123016498458415215&permissions=67584&integration_type=0&scope=bot+applications.commands">Cherokee Dictionary bot</a> for Discord, and a <a href="https://cherokee.neocities.org/dictionary">simple website</a> to host the dictionary before working on the full dictionary app.</li>
<li>Converted Cherokee reference materials into <a href="https://github.com/lily-bel/cherokee-data-consolidation">workable spreadsheets</a> for use in future projects.</li>
</ul>`,
        images: [
            './images/resources2.jpg',
            './images/resources1.jpg',
            './images/resources3.jpg',
            './images/resources4.jpg'
        ]
    },
    {
        id: 'cowspotting',
        title: 'Cowspotting',
        link: 'https://github.com/lily-bel/cowspotting',
        year: '2026',
        subtitle: 'React, JS, HTML • Web, Mobile, Data',
        categories: ['software', 'data'],
        description: `A React app for web and mobile with a fun + wholesome Pokédex style for identifying and cataloging cow breeds.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Utilized Python + Google Apps Script to scrape sites and help automate the surprisingly difficult task of cataloging and tagging all 104 cow breeds that can be seen in the US.</li>
<li>Users can answer questions to narrow down their search, save and catalog cows they have seen, and customize their pages with photos and locations.</li>
</ul>`,
        images: [
            './images/cow1.jpg',
            './images/cow2.jpg',
            './images/cow3.jpg'
        ]
    },
    {
        id: 'arch-virtual',
        title: 'Arch Virtual – Unity Developer',
        link: 'https://acadicus.com/',
        year: 'SEPTEMBER 2021 - MAY 2024',
        subtitle: 'C# • XR, Unity',
        categories: ['xr', 'software'],
        description: `Interactive technical simulations for Virtual Reality (VR) medical education platform <a href="https://acadicus.com/">Acadicus</a>. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Created medical simulations in Unity for solo and multiplayer online use.</li>
<li>Led multiple full-time projects in an Agile workflow, creating timelines, coordinating with artists and QA testers, and responding to feedback from clients.</li>
<li>Met with academic medical staff to ensure the accuracy of the simulations.</li>
<li>Delivered highly technically products including real-time networked eye tracking for simulated stroke exams, procedure simulations, and mass casualty simulations for EMS staff.</li>
</ul>`,
        images: [
            './images/acadicus1.gif',
            './images/acadicus12.gif',
            './images/acadicus3.gif'
        ]
    },
    {
        id: 'spellbound-ar',
        title: 'Spellbound AR',
        link: 'https://www.spellboundar.com/',
        year: 'JUNE 2019 - FEBRUARY 2021',
        subtitle: 'C# • XR, Mobile, Unity',
        categories: ['xr', 'software'],
        description: `Augmented Reality (AR) mobile experiences on the <a href="https://www.spellboundar.com/">SpellBound</a> platform to aid hospital teams in treating patients, with a focus on pediatrics. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Created an AR interactive mural for display at New York-Presbyterian Hospital.</li>
<li>Worked on ARISE, an AR scavenger hunt adventure game for use on Android or iOS, made to encourage pediatric patient mobility after injury or illness.</li>
<li>Improved the Spellbound AR app backend / UX.</li>
<li>Helped prototype projects based on customer research and assisted with client relations.</li>
</ul>`,
        images: [
            './images/spellbound1.jpg',
            './images/spellbound2.jpg',
            './images/spellbound3.jpg',
            './images/spellbound4.jog.png'
        ]
    },
    {
        id: 'indie-game-dev',
        title: 'Independent Game Development',
        year: '2017 - PRESENT',
        subtitle: 'C# • Unity, Game Development',
        categories: [],
        description: `I am a solo independent game developer and artist. I’ve released several projects. My most recent is Wingless Fairies, a fully motion-captured digital experience where you inhabit the side character of a one-act play. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>I have been developing and releasing my solo projects for over a decade, and am confident and excited to use my full skill-set of programming, 2D and 3D visual arts, writing, and design skills whenever they are called upon.</li>
<li>Collaged retro game assets with personally crafted 3D models utilizing Blender and VRoid studio.</li>
<li>Created an intricate and rich game environment in Unity + C#.</li>
<li>Fully motion-captured made with VR software and edited in Unity.</li>
</ul>`,
        images: [
            './images/games2.png',
            './images/games3.jpg',
            './images/games1.jpg',
            './images/games4.jpg'
        ]
    }
];
