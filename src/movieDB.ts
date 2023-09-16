import { Movie } from './store/moviesStore'
type simulatedDB = Movie[]

const simDB: simulatedDB = [
    {
        title:"Blade Runner",
        img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg",
        year:1982,
        rating: 5,
        genre: 'futuristic',
        tags:['cyberpunk','dystopic','neo-noir','police', 'male protagonist', 'future'],
        desc: "In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase, developed robots, called 'replicants', that were supposed to aid society, the replicants which looked and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called 'blade runners', have the job of destroying - or in their parlance 'retiring' - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a replicant being sentenced to death. It's now November, 2019 in Los Angeles, California. Rick Deckard, a former blade runner, is called out of retirement when four known replicants, most combat models, have made their way back to Earth, with their leader being Roy Batty. One, Leon Kowalski, tried to infiltrate his way into the Tyrell Corporation as an employee, but has since been able to escape. Beyond following Leon's trail in hopes of finding and retiring them all, Deckard believes part of what will help him is figuring out what the replicants wanted with the Tyrell Corporation in trying to infiltrate it. The answer may lie with Tyrell's fail-safe backup mechanism. Beyond tracking the four, Deckard faces a possible dilemma in encountering a fifth replicant: Rachael, who works as Tyrell's assistant. The issue is that Dr. Elden Tyrell is experimenting with her, to provide her with fake memories so as to be able to better control her. With those memories, Rachael has no idea that she is not human. The problem is not only Rachael's assistance to Deckard, but that he is beginning to develop feelings for her."
    },
    {
        title:"Blade Runner 2049",
        img: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
        year:2017,
        rating: 5,
        genre: 'futuristic',
        tags:['cyberpunk','dystopic','neo-noir','police', 'male protagonist', 'future'],
        desc: "Thirty years after the events of Blade Runner (1982), a new Blade Runner, L.A.P.D. Officer 'K' (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years."
    },
    {
        title:"Arrival",
        img: "https://pics.filmaffinity.com/La_llegada-150207636-large.jpg",
        year:2016,
        rating: 4,
        genre: 'space',
        tags:['spacecraft','female protagonist','foresight', 'linguistics', 'aliens'],
        desc: "Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touchdown in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind."
    },
    {
        title:"Ex Machina",
        img: "https://images.justwatch.com/poster/257194156/s718/ex-machina.jpg",
        year:2014,
        rating: 4,
        genre: 'robots',
        tags:['robots','IA', 'male protagonist', 'science'],
        desc: "Caleb, a 26 year old programmer at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl."
    },
    {
        title:"Edge of Tomorrow",
        img: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
        year:2014,
        rating: 4,
        genre: 'timeTravel',
        tags:['war', 'aliens', 'time loop', 'male protagonist', 'future'],
        desc: "An alien race has hit the Earth in an unrelenting assault, unbeatable by any military unit in the world. Major William Cage (Cruise) is an officer who has never seen a day of combat when he is unceremoniously dropped into what amounts to a suicide mission. Killed within minutes, Cage now finds himself inexplicably thrown into a time loop-forcing him to live out the same brutal combat over and over, fighting and dying again...and again. But with each battle, Cage becomes able to engage the adversaries with increasing skill, alongside Special Forces warrior Rita Vrataski (Blunt). And, as Cage and Vrataski take the fight to the aliens, each repeated encounter gets them one step closer to defeating the enemy!"
    },
    {
        title:"Dune",
        img: "https://pics.filmaffinity.com/Dune-209834814-large.jpg",
        year:2021,
        rating: 4,
        genre: 'space',
        tags:['male protagonist', 'spacecraft', 'future', 'war', 'foresight', 'politics'],
        desc: "A mythic and emotionally charged hero's journey, -Dune- tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive."
    },
    {
        title:"Dune",
        img: "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
        year:1984,
        rating: 3.5,
        genre: 'space',
        tags:['male protagonist', 'spacecraft', 'future', 'war', 'foresight', 'politics'],
        desc: "In the distant year of 10191, all the planets of the known Universe are under the control of Padishah Emperor Shaddam IV and the most important commodity in the Universe is a substance called the spice 'MELANGE' which is said to have the power of extending life, expanding the consciousness and even to 'fold space' ; being able to travel to any distance without physically moving. This spice 'MELANGE' is said to only be produced in the desert planet of Arrakis, where the FREMEN people have the prophecy of a man who will lead them to true freedom. This 'desert planet' of Arrakis is also known as DUNE. A secret report of the space 'GUILD' talks about some circumstances and plans that could jeopardize the production of 'SPICE' with four planets involved: ARRAKIS, CALADAN, GIEDI PRIME and KAITAIN, a world at least visually very alike to Earth and house of the Emperor of the known Universe. The 'GUILD' sends a third stage navigator to KAITAIN to ask details from the Emperor and to demand him the killing of young Paul Atreides, son of the Duke Leto Atreides of CALADAN."
    },
    {
        title:"Dark City",
        img: "https://images.justwatch.com/poster/157451389/s592/dark-city-1998",
        year:1998,
        rating: 4,
        genre: 'aliens',
        tags:['neo-noir', 'aliens', 'male protagonist', 'police'],
        desc: "John Murdoch awakens alone in a strange hotel to find that he has lost his memory and is wanted for a series of brutal and bizarre murders. While trying to piece together his past, he stumbles upon a fiendish underworld controlled by a group of beings known as The Strangers who possess the ability to put people to sleep and alter the city and its inhabitants. Now Murdoch must find a way to stop them before they take control of his mind and destroy him."
    },
    {
        title:"Life",
        img: "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        year:2017,
        rating: 3.5,
        genre: 'space',
        tags:['aliens', 'spacecraft', 'science', ],
        desc: "Life tells the story of the six-member crew of the International Space Station that is on the cutting edge of one of the most important discoveries in human history: the first evidence of extraterrestrial life on Mars. As the crew begins to conduct research, their methods end up having unintended consequences and the life form proves more intelligent than anyone ever expected."
    },
    {
        title:"Metropolis",
        img: "https://m.media-amazon.com/images/I/51xSTnAL2BL._AC_UF894,1000_QL80_.jpg",
        year:1927,
        rating: 4,
        genre: 'futuristic',
        tags:['future', 'politics','dystopic','robots','science'],
        desc: "Sometime in the future, the city of Metropolis is home to a Utopian society where its wealthy residents live a carefree life. One of those is Freder Fredersen. One day, he spots a beautiful woman with a group of children, she and the children quickly disappear. Trying to follow her, he is horrified to find an underground world of workers who apparently run the machinery that keeps the Utopian world above ground functioning. One of the few people above ground who knows about the world below is Freder's father, John Fredersen, who is the founder and master of Metropolis. Freder learns that the woman is called Maria, who espouses the need to join the 'hands' - the workers - to the 'head' - those in power above - by a mediator who will act as the heart. Freder wants to help the plight of the workers in their struggle for a better life. But when John learns of what Maria is advocating and that Freder has joined their cause, with the assistance of an old colleague. an inventor called Rotwang, who turns out to be But their nemesis goes to works towards quashing a proposed uprising, with Maria at the centre of their plan. John, unaware that Rotwang has his own agenda., makes plans that include shutting down the machines, with the prospect of unleashing total anarchy both above and below ground."
    }
]

export default simDB