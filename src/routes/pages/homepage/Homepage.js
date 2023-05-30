import './Homepage.scss';
import { Framework, DevOpTools, DatabasePlatform } from './sources/showcase-data';

export default function Home() {

    const d = new Date();
    let year = d.getFullYear();
    let year_exp = year - 2019;

    const frameworks = Framework();
    const services = DevOpTools();
    const databases = DatabasePlatform();

    return (
        <div>
            <img className='background' src={require('../../../media/images/beach.jpg')}>
            </img>
            <div className='block' id='home'>
                <div className='container title'>
                    { /** Section 1 Contents */ }
                    <h1>Digital <br/> Portfolio</h1>
                    <p>
                        By Vince Magbanua                   
                    </p>
                    <p>
                        Software Engineer / Fullstack Developer / Graphic Designer / Photography Hobbyist
                    </p>
                    <p>
                        <i>“What we do now echoes in eternity.” ― Marcus Aurelius, Meditations </i>
                    </p>
                </div>
            </div>

            <div className='block' id='profile' style={{backgroundColor: "white"}}>
                <div className='container'>
                    <h2>Profile</h2>
                    <div className='container-flex'>
                        <div className='container'>test</div>
                        <div className='container'>
                            <p>
                                Hello there! Welcome to my Portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='block' id='work' style={{backgroundColor: "white"}}>
                <div className='container'>
                    { /** Section 1 Contents */ }
                    <h2>Web & Application Development Works</h2>
                    <div className='container description'>
                        <p>
                            I have worked as a web and application developer for {year_exp} years. 
                            During this time, I have gained valuable experience in developing and deploying 
                            websites and applications across various platforms. My skills include proficiency 
                            in multiple programming languages and various backend languages. 
                            I have worked on projects ranging from small-scale websites to complex web applications and have experience working with both front-end and back-end technologies.
                        </p>

                        <div className='container icon-showcase'>
                            {frameworks.map((framework) => {
                                return <div>
                                    <img src={framework.url}/>
                                    <p>{framework.text}</p>
                                </div>
                            })}
                        </div>

                        <p>
                            In addition to my 4 years of experience as a web and application developer, 
                            I have also gained exposure to Development Operations, Analytics, and Deployment. 
                            I have worked on projects involving DevOps practices such as continuous integration and 
                            deployment. I also have experience in data analytics, including data collection, analysis, 
                            and visualization using tools like Google Analytics. Finally, I have experience deploying 
                            websites and applications to various platforms, including AWS, and I am familiar 
                            with the associated deployment processes and tools.
                        </p>

                        <div className='container icon-showcase'>
                            {services.map((service) => {
                                return <div>
                                    <img src={service.url}/>
                                    <p>{service.text}</p>
                                </div>
                            })}
                        </div>

                        <p>
                            with databases such as MySQL, PostgreSQL, and MongoDB. Over the course of my 
                            experience as a web and application developer, I have worked with these databases 
                            to design and develop efficient and scalable data structures. I have experience with 
                            querying data using SQL, as well as using non-relational approaches such as document-oriented 
                            database systems like MongoDB. I am also knowledgeable in best practices for database 
                            management and maintenance, including backup and recovery procedures, data security measures, 
                            and performance optimization.
                        </p>

                        <div className='container icon-showcase'>
                            {databases.map((database) => {
                                return <div>
                                    <img src={database.url}/>
                                    <p>{database.text}</p>
                                </div>
                            })}
                        </div>

                    </div>
                    <h2>Creative Works</h2>
                </div>
            </div>
        </div>
    );
}