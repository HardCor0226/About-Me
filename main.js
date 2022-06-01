const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0){
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "Welcome to a little interactive way of getting to know me, Corey Strunk! That IS what you're here for...right?",
        options: [
            {
                text: 'Yes, I am!',
                nextText: 2
            },
            {
                text: 'Actually, I was just looking for the bathroom...',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "Great! Let's start with a little professional statement. \nI am a budding software engineer and military veteran" +
        " who has a fine understanding of multiple programming languages and works hard to achieve objectives and continue learning along the way!" +
        " I pride myself as a supportive team player with experience in collaboration while bringing fresh ideas to conqueror problems." +
        " I strive to always understand business needs while turning requirements into solutions!",
        options: [
            {
                text: 'That sounds great! What is your education like?',
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: 'Well, it was nice meeting you, anway!',
        options: [
            {
                text: "Are you sure you don't want to hear more?",
                nextText: 2
            },
            {
                text: 'Want to go back?',
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: "I'm glad you asked! \nI hold a Bachelor of Arts in English Writing from West Chester University of Pennsylvania!" +
        " That being said, I am currently working towards a Masters degree in Computer Science. I just have ONE semester left!",
        options: [
            {
                text: 'WOW. What made you pivot from a career using your English degree to earning one in Computer Science?',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "Well, I always had a heavy interest in programming, but I honestly never thought I could pull it off! So," +
        " I stuck with what I was good at, writing, and went to make a career out of it. Then, after 6 hard years in the Army and 4 years" +
        " working in publishing, I decided that I AM capable of being a successful programmer and so, I set out to do so!",
        options: [
            {
                text: "Makes sense! Tell me about your career so far!",
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "Well, right now I work as an Associate Test Publisher for Pearson VUE! In this position, I primarily build" +
        " client-facing, dynamic web-based score reports using JavaScript, HTML, and CSS. I also use proprietary and 3rd-party" +
        " software tools to data load and build certification exams to client specification. \nRecently, I did supplemental work with" +
        " Pearson VUE's Software Quality Assurance team where I would work with experienced software QA engineers to design test" +
        " plans, document software defects, and track bugs using Agile environments like Digital.ai Agility and Confluence." +
        " I would also work with software engineers to help develop and maintain code using Bitbucket and ALM." +
        " \nPrior to this, I also held the positions of Proposals Coordinator and Editiorial Assistant at Pearson VUE.",
        options: [
            {
                text: "Tell me about your military career.",
                nextText: 7
            },
            {
                text: "Any supplemental experience? Certifications?",
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: "I enlisted in the Pennsylvania Army National Guard when I was 19 in order to pay for college and served a 6 year contract." +
        " During that time, I was sent on multiple in-country missions, such as being part of the guard force for the Pope's visiting to Philadelphia." +
        " I served in both the Cavalry and the Infantry in scout positions that required acute attention to detail. My years in the service have" +
        " permanently instilled discipline, endurance, and leadership skills within me.",
        options: [
            {
                text: "That's great! Any supplemental experience? Certifications?",
                nextText: 10
            },
            {
                text: "I think I've heard enough. Thank you for sharing!",
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: "Yes! Prior to going back to school for my M.S. in Computer Science, I earned two certifications:" +
        " one in Python 3 through the University of Michigan and one in Web Development Foundations from Duke University.",
        options: [
            {
                text: "Tell me about your military career.",
                nextText: 9
            },
            {
                text: "I think I've heard enough. Thank you for sharing!",
                nextText: 11
            }
        ]
    },
    {
        id: 9,
        text: "I enlisted in the Pennsylvania Army National Guard when I was 19 in order to pay for college and served a 6 year contract." +
        " During that time, I was sent on multiple in-country missions, such as being part of the guard force for the Pope's visiting to Philadelphia." +
        " I served in both the Cavalry and the Infantry in scout positions that required acute attention to detail. My years in the service have" +
        " permanently instilled discipline, endurance, and leadership skills within me.",
        options: [
            {
                text: "I think I've heard enough. Thank you for sharing!",
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: "Yes! Prior to going back to school for my M.S. in Computer Science, I earned two certifications:" +
        " one in Python 3 through the University of Michigan and one in Web Development Foundations from Duke University.",
        options: [
            {
                text: "I think I've heard enough. Thank you for sharing!",
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: "Thank you so much for listening and I hope to speak to you again soon!",
        options: [
            {
                text: "Want to start again?",
                nextText: -1
            }
        ]
    }
]

startGame()