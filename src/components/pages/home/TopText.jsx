import { useState } from "react"
import styles from "./Home.module.css"
import { NavLink, Route, Routes } from "react-router-dom"

function TopText() {
  return (
    <div className={styles.top__text}>
      <span className={styles.top__text__title}>Смотреть аниме онлайн</span>
      <span>
        Аниме — не просто детские мультфильмы, а нечто большее. Это
        разновидность художественной анимации, которую нравится смотреть онлайн
        людям самого разного возраста — от малышей до бабушек и дедушек. А
        особенно круто, когда все эти анимешки на русском языке, все серии
        мультфильмов идут подряд и доступны совершенно бесплатно. Некоторые,
        правда, по ошибке продолжают причислять эти произведения искусства к
        «мультикам». Хотя по сложности сюжета, глубине персонажей они часто
        превосходят привычные фильмы, снятые на плёнку.
      </span>
    </div>
  )
}

export default TopText
