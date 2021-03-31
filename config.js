var config = {
    style: 'mapbox://styles/alin7138/ckmw5lfu9165317suagmik05g',
    accessToken: 'pk.eyJ1IjoiYWxpbjcxMzgiLCJhIjoiY2s5bHhzM2p5MDNuajNrbnFxZW5yd3RmZyJ9.bnOBSehlyZ1_URBS8zlKEg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'David Sigo, Tribal Member and Elder of the Suquamish Tribe',
            //image: './path/to/image/source.png',
            description: '"Because of the industrial growth of highways, damns, culverts, pollution over the past years, this has damaged a lot of our ecosystem. And the salmon are not going to come back to somewhere where they cannot lay their eggs. And the ecosystem is not just going to fix itself."',
            location: {
                center: [-122, 47],
                zoom: 8,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Wilbur Slockish, Elder from Klickitat Tribe',
            //image: './path/to/image/source.png',
            description: '"Our economy wasn’t based on paper, it was based on different trade goods. So, it’s hard to explain, so that’s why when we get asked about the economic value of it we can’t because it’s priceless. No amount of money or no amount of gold or any other product would replace the value of these fish"',
            location: {
                center: [-121.94, 45.644],
                zoom: 7,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
