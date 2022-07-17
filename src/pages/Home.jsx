import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import '../styles/App.scss'
import styles from './Home.module.scss'
import { motion } from 'framer-motion/dist/framer-motion'
import { Row,Col } from "react-bootstrap";


const ItemAnimation = {
    hidden: {
        x: 400,
        y:200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        y:0,
        opacity: 1,
        transition: { delay: custom * 0.2,type: "Tween",duration: 1}
    })
}


const Home = () => {
    return (
            
        <div className={styles.home}>
            <HeroSection>
            </HeroSection>

            <motion.section
                initial='hidden'
                whileInView='visible'
                className={styles.s_about}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <motion.div custom={0} variants={ItemAnimation} className={styles.title}>MEGA это...</motion.div>
                        <motion.p variants={ItemAnimation} custom={1} >
                            комфортные условия для профессиональных тренировок и атмосферного времяпрепровождения в широком кругу любителей компьютерных и консольных игр <br /><br />
                            Мы создаем атмосферу киберспорта для вас!
                        </motion.p>
                    </div>
                    <ul className={styles.items}>
                        <motion.li custom={2} variants={ItemAnimation} className={styles.item}>
                            <div className={styles.item_left}></div>
                            <div className={styles.item_check}></div>
                            <div className={styles.item_right}>сеть киберспортивных центров на Юге России</div>
                        </motion.li>
                        <motion.li custom={3} variants={ItemAnimation} className={styles.item}>
                            <div className={styles.item_left}></div>
                            <div className={styles.item_check}></div>
                            <div className={styles.item_right}>лучшее железо и периферия</div>
                        </motion.li>
                        <motion.li custom={4} variants={ItemAnimation} className={styles.item}>
                            <div className={styles.item_left}></div>
                            <div className={styles.item_check}></div>
                            <div className={styles.item_right}>Уровень сертифицирования клубов компанией NVIDIA - PLATINUM</div>
                        </motion.li>
                        <motion.li custom={5} variants={ItemAnimation} className={styles.item}>
                            <div className={styles.item_left}></div>
                            <div className={styles.item_check}></div>
                            <div className={styles.item_right}>5 киберспортивных центров в г. Нальчик и 1 в г. Баксан</div>
                        </motion.li>
                    </ul>
                </div>
            </motion.section>

            <section className={styles.s_opp}>
            <div className={styles.container}>
                <div className={styles.s_opp_title}></div>
                <div className={styles.s_opp_subtitle}></div>

                </div>
            </section>

        </div>

    );
};

export default Home;
