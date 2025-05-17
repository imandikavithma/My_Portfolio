import SkillCard from './skillcard'

const skillItem = [
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        label:'HTML',
        description:'Page structure'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        label:'CSS',
        description:'Page styling'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        label:'JavaScript',
        description:'Web interactivity'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        label:'TypeScript',
        description:'Typed JavaScrip'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        label:'Python',
        description:'General-purpose'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        label:'Java',
        description:'Backend language'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
        label:'PHP',
        description:'Web scripting'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
        label:'MySQL',
        description:'SQL database'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        label:'React',
        description:'UI library'
    },
   
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg',
        label:'Spring Boot',
        description:'Java framework'
    },
    {
        imgSrc:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
        label:'Tailwind CSS',
        description:'CSS utilities'
    },
    {
        imgSrc:'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg',
        label:'Git',
        description:'Version control'
    },
    {
        imgSrc:'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
        label:'Figma',
        description:'UI design'
    },
    
]
const skills = () => {
  return (
    <section className="section">
        <div className="bg-black text-white py-20" id="skills">

            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] px-15">
                    {
                        skillItem.map(({imgSrc,label,description},key) => (
                            <SkillCard
                                imgSrc={imgSrc}
                                label={label}
                                description={description}
                                key={key}
                            />
                        ))
                    }

                </div>
        </div>

    </section>
  )
}

export default skills