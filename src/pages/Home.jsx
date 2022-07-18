import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./Home.module.scss";
import { motion } from "framer-motion/dist/framer-motion";
import "bootstrap/dist/css/bootstrap-grid.css";

const ItemAnimation = {
	hidden: {
		x: 400,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2, type: "Tween", duration: 1 },
	}),
};

const Home = () => {
	return (
        
		<div className={styles.home}>
			<HeroSection></HeroSection>
                
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={styles.s_about}
			>
				<div className={styles.container}>
					<div className={styles.text}>
						<motion.div
							custom={0}
							variants={ItemAnimation}
							className={styles.title}
						>
							MEGA это...
						</motion.div>
						<motion.p variants={ItemAnimation} custom={1}>
							комфортные условия для профессиональных тренировок и
							атмосферного времяпрепровождения в широком кругу
							любителей компьютерных и консольных игр <br />
							<br />
							Мы создаем атмосферу киберспорта для вас!
						</motion.p>
					</div>
					<ul className={styles.items}>
						<motion.li
							custom={2}
							variants={ItemAnimation}
							className={styles.item}
						>
							<div className={styles.item_left}></div>
							<div className={styles.item_check}></div>
							<div className={styles.item_right}>
								сеть киберспортивных центров на Юге России
							</div>
						</motion.li>
						<motion.li
							custom={3}
							variants={ItemAnimation}
							className={styles.item}
						>
							<div className={styles.item_left}></div>
							<div className={styles.item_check}></div>
							<div className={styles.item_right}>
								лучшее железо и периферия
							</div>
						</motion.li>
						<motion.li
							custom={4}
							variants={ItemAnimation}
							className={styles.item}
						>
							<div className={styles.item_left}></div>
							<div className={styles.item_check}></div>
							<div className={styles.item_right}>
								Уровень сертифицирования клубов компанией NVIDIA
								- PLATINUM
							</div>
						</motion.li>
						<motion.li
							custom={5}
							variants={ItemAnimation}
							className={styles.item}
						>
							<div className={styles.item_left}></div>
							<div className={styles.item_check}></div>
							<div className={styles.item_right}>
								5 киберспортивных центров в г. Нальчик и 1 в г.
								Баксан
							</div>
						</motion.li>
					</ul>
				</div>
			</motion.section>

			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={styles.s_opp}
			>
				<div className="container">
					<motion.div
						custom={0}
						variants={ItemAnimation}
						className={styles.s_opp_title}
					>
						У НАС ВЫ НАЙДЕТЕ
					</motion.div>
					<div className="row">
						<motion.div
							custom={0}
							variants={ItemAnimation}
							className={`col-md-3 ${styles.s_opp_item}`}
						>
							<div
								className={`${styles.opp_item_img} ${styles.pc}`}
							></div>
							<div className={styles.opp_item_text}>
								МОЩНЫЕ
								<br />И ГРАМОТНО НАСТРОЕННЫЕ ИГРОВЫЕ ПК
							</div>
						</motion.div>
						<motion.div
							custom={2}
							variants={ItemAnimation}
							className={`col-md-3 ${styles.s_opp_item}`}
						>
							<div
								className={`${styles.opp_item_img} ${styles.internet}`}
							></div>
							<div className={styles.opp_item_text}>
								Высокую скорость интернет с низким пингом
							</div>
						</motion.div>
						<motion.div
							custom={3}
							variants={ItemAnimation}
							className={`col ${styles.s_opp_item}`}
						>
							<div
								className={`${styles.opp_item_img} ${styles.chairs}`}
							></div>
							<div className={styles.opp_item_text}>
								Удобные игровые кресла
							</div>
						</motion.div>
						<motion.div
							custom={4}
							variants={ItemAnimation}
							className={`col-md-3 ${styles.s_opp_item}`}
						>
							<div
								className={`${styles.opp_item_img} ${styles.devices}`}
							></div>
							<div className={styles.opp_item_text}>
								ФЛАГМАНСКИЕ ИГРОВЫЕ ДЕВАЙСЫ
							</div>
						</motion.div>
					</div>
					<div className="row">
						<motion.div
							custom={5}
							variants={ItemAnimation}
							className={`col-md-4 ${styles.s_opp_item} `}
						>
							<div
								className={`${styles.opp_item_img} ${styles.cond}`}
							></div>
							<div className={styles.opp_item_text}>
								отличную СИСТЕМу КОНДИЦИОНИРОВАНИЯ
							</div>
						</motion.div>
						<motion.div
							custom={6}
							variants={ItemAnimation}
							className={`col-md-4 ${styles.s_opp_item}`}
						>
							<div
								className={`${styles.opp_item_img} ${styles.cashback}`}
							></div>
							<div className={styles.opp_item_text}>
								Кэшбэк система для всех поситителей
							</div>
						</motion.div>
						<motion.div
							custom={7}
							variants={ItemAnimation}
							className={`col-md-4 ${styles.s_opp_item}`}
						>
							<div
								className={` ${styles.opp_item_img} ${styles.tour}`}
							></div>
							<div className={styles.opp_item_text}>
								РЕГУЛЯРНОЕ ПРОВЕДЕНИЕ КИБЕРСПОРТИВНЫХ ТУРНИРОВ
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default Home;
