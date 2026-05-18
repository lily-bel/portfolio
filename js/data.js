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
        subtitle: 'ShaderLab, C# • Unity, Game Development',
        categories: ['xr', 'software'],
        description: `A fast <a href="https://surfsplatting.github.io/">2D Gaussian Splatting</a> render implementation for Unity with brushstroke texture options.
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>ShaderLab materials for rendering point clouds with 2x2 texture atlas and single texture options.</li>
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
        description: `I created <a href="https://play.google.com/store/apps/details?id=com.LilyBelmira.LearnCherokeeSyllabary&hl=en_US">Learn Cherokee Syllabary</a> as a free mobile app to help learners teach themselves to read and write the Cherokee Syllabary. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>App includes a tracing mode for learning the shapes of syllabary symbols and corresponding phonetic representations, and a reading mode for interpreting characters into phonetics.</li>
<li>Learners can test their knowledge by drawing the syllabary characters with phonetic prompts and get feedback on their progress.</li>
<li>Drawing success is self-rated to allow for different family and community character variations.</li>
<li>This app can be used by both Cherokee learners and Speakers who cannot write in syllabary, and is ideal for technology-integrated educational environments.</li>
<li>The app has 2000+ installs on Android and iOS devices. The app was originally created using Unity + C#, and has now switched over to React.</li>
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
        description: `I’ve completed and initiated several other projects to improve access to Cherokee learning resources and assist learners, including myself, in rapidly acquiring technically and linguistically complex aspects of the language. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Created downloadable, multimedia <a href="https://drive.google.com/drive/folders/18DiLX00MYoS9xawvgVy3vEQt0V411Zah">flashcards</a> utilizing Wyman Kirk’s verb conjugation book + CED sentence examples, using Python libraries and manual processing to generate English conjugations for 9000+ conjugations of 400+ verbs with tense and person.</li>
<li>Created a <a href="">Cherokee Dictionary bot</a> for Discord, and a <a href="https://cherokee.neocities.org/dictionary">simple website</a> to host the dictionary before working on the full dictionary app.</li>
<li>Converted Cherokee reference materials into <a href="https://drive.google.com/drive/folders/18DiLX00MYoS9xawvgVy3vEQt0V411Zah">workable spreadsheets</a> for use in future projects.</li>
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
<li>Used Python + Google Apps Script to scrape sites and help automate the surprisingly difficult task of cataloging and tagging all 104 cow breeds that can be seen in the US.</li>
<li>App allows users to answer questions to narrow down their search, save and catalog cows they have seen, and customize their pages with photos and spotting locations.</li>
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
        description: `I worked at <a href="https://acadicus.com/">Arch Virtual / Acadicus</a> for more than two years developing interactive technical simulations for a Virtual Reality (VR) medical education platform. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Simulations were created in Unity in Playmaker for solo and multiplayer online use.</li>
<li>Led multiple full-time projects in an Agile workflow, creating timelines, coordinating with artists and QA testers, and responding to feedback from clients.</li>
<li>Met with academic medicine staff to ensure the medical accuracy of the simulations.</li>
<li>Delivered highly technically accurate products including real-time networked eye tracking for simulated stroke exams, procedure simulations, and mass casualty simulations for EMS staff.</li>
<li>In this role I expanded my knowledge of online networked multiplayer environments, as well my skills in project management, moving from a client’s idea to a finished, polished product.</li>
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
        description: `At <a href="https://www.spellboundar.com/">SpellBound</a> I worked creating Augmented Reality (AR) experiences in Unity to aid hospital teams in treating patients, with a focus on pediatrics. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>Created an AR interactive mural for display at New York-Presbyterian Hospital.</li>
<li>Worked on ARISE, an AR scavenger hunt adventure game for use on Android or iOS, made to encourage pediatric patient mobility after injury or illness.</li>
<li>Improved the Spellbound AR app backend/UX.</li>
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
        categories: ['xr', 'software'],
        description: `I am a solo independent game developer and artist. I’ve released several projects. My most recent is Wingless Fairies, a fully motion-captured digital experience where you inhabit the side character of a one-act play. 
<ul class="list-disc pl-4 mt-2 space-y-1">
<li>I have been developing and releasing my solo projects for over a decade, and am confident and excited to use my full skill-set of programming, 2D and 3D visual arts, writing, and design skills whenever they are called upon.</li>
<li>Collaged retro game assets with personally crafted 3D models utilizing Blender and VRoid studio.</li>
<li>Created an intricate and rich game environment in Unity + C#.</li>
<li>Fully motion-captured made with VR software and edited in Unity.</li>
</ul>`,
        images: [
            './images/games1.jpg',
            './images/games2.png',
            './images/games3.jpg',
            './images/games4.jpg'
        ]
    }
];
