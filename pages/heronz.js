import Image from 'next/image'
import styles from '../styles/heronz.module.css'

function heronzHome() {
    return (
        <>
            <header className={`${styles.c_odd} ${styles.c_hero}`}>
                <h1>Online tutoring for students by students.</h1>
                <p className={styles.subhead}>Heronz is an interactive platform for learning. Join us for free and begin with a personalised tutor.</p>
                <a href="https://heronz.org/enrol/"><button className={styles.o_btn_primary}>Learn with Us</button></a>
            </header>
            <section className={styles.c_even}>
                <div className={styles.o_section_div}> 
                    <div style={{position: 'relative'}}>
                        <Image src="/images/heronz/heron_flight.jpg" alt="Heron in Flight" layout="fill"  objectFit="contain"/>
                    </div>
                </div>
                <div className={`${styles.c_flex} ${styles.c_squish}`}>
                    <div className={`${styles.c_flex_5of12} ${styles.o_illust} ${styles.u_align_vert} ${styles.u_align_right}`}>
                        <div style={{position: 'relative'}}>
                            <Image src="/images/heronz/hand_on_paper.jpg" alt="Hand on Paper" layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <div className={styles.c_flex_5of12}>
                    <h2>Tried and true practices</h2>
                    <p className={styles.c_squash}>As students, our techniques and strategies in learning have been through multiple tests. Heronz knows what works.</p>
                    </div>
                </div>
                <div className={`${styles.c_flex} ${styles.c_squish}`}>
                    <div className={styles.c_flex_5of12}>
                    <h2>No sign-ups, no hassle.</h2>
                    <p className={styles.c_squash}>The Heronz Classroom is fitted with video conferencing tools and an interactive whiteboard. Try the classroom out using tutor code: demo.</p>
                    </div>
                    <div className={`${styles.c_flex_5of12} ${styles.o_illust} ${styles.u_align_vert}`}>
                        <div style={{position: 'relative'}}>
                            <Image src="/images/heronz/split_desk.jpg" alt="Split Desk" layout="fill"  objectFit="contain"/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.c_flex} ${styles.c_squish}`}>
                    <div className={`${styles.c_flex_5of12} ${styles.o_illust} ${styles.u_align_vert} ${styles.u_align_right}`}>
                        <div style={{position: 'relative'}}>
                            <Image src="/images/heronz/hot_air_balloons.jpg" alt="Hot Air Balloons in the Clouds" layout="fill"   objectFit="contain"/>
                        </div>
                    </div>
                    <div className={styles.c_flex_5of12}>
                    <h2>Free, always</h2>
                    <p className={styles.c_squash}>From the online platform to the curriculum, everything is handcrafted by Team Heronz. Experience one-to-one tutoring at absolutely no cost.</p>
                    </div>
                </div>
            </section>
            <section className={styles.c_odd}>
                <div className={styles.o_section_div}>
                    <Image src="/images/heronz/heron_water.jpg" alt="Heron in Water" layout="fill"  objectFit="contain"/>
                </div>    
                <div className={`${styles.c_flex} ${styles.c_squish}`}>
                    <div className={styles.c_flex_5of12}>
                        <div className={styles.o_subject_icon}>
                            <div style={{position: 'relative'}}>
                                <Image src="/images/heronz/icon-maths.png" alt="Mathematics Icon" layout="fill"  objectFit="contain"/>
                            </div>
                        </div>
                        <h2>Mathematics</h2>
                        <ul>
                            <li>Basic</li>
                            <li>Intermediate</li>
                            <li>Advanced</li>
                        </ul>
                    </div>
                    <div className={styles.c_flex_5of12}>
                        <div className={styles.o_subject_icon}>
                            <Image src="/images/heronz/icon-english.png" alt="English Icon" layout="fill"  objectFit="contain"/>
                        </div>
                        <h2>English</h2>
                        <ul>
                            <li>Comprehensive</li>
                            <li>Grammar</li>
                            <li>Conversation</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.c_even}>
                <div className={styles.o_section_div}>
                    <div style={{position: 'relative'}}>
                        <Image src="/images/heronz/rangitoto_island.jpg" alt="Rangitoto Island" layout="fill" objectFit="contain" />
                    </div>
                </div>
                <h2>We believe in learning</h2>
                <blockquote className={styles.c_squash}>In every topic thinkable, there are multiple resources available in the form of books, articles, online videos, and webpages. However, it is too easy to be dragged back by the plethora of choices. We created Heronz to help.

    We believe in the opportunity to learn for everyone. Heronz is barrier-free in geographical location, language, and cost. Join us regardless of whether you are in New Zealand or overseas; whether you speak English or not.

    We send a big thank you to everyone who helped, is helping, or will be helping, in making Heronz come alive. We are proud of everything we have done, and hope to see you soon.</blockquote>
            </section>
            <div className={styles.o_section_div}>
                <div style={{position: 'relative'}}>
                    <Image src="/images/heronz/auckland_skyline-gainsboro.jpg" alt="Auckland City Skyline" layout="fill" objectFit="contain"/>
                </div>
            </div>
        </>
    )
}


export default heronzHome