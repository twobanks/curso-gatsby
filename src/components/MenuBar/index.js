import React, { useState, useEffect } from "react"

import { HomeSmile } from "@styled-icons/boxicons-solid/HomeSmile"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt  } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb } from "@styled-icons/open-iconic/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const MenuBar = () => {
	const [theme, setTheme] = useState(null)
	const [display, setDisplay] = useState(null)
	const isDarkMode = theme === "dark"
	const isListMode = display === "list"
	useEffect(() => {
		setTheme(window.__theme)
		setDisplay(window.__display)
		window.__onThemeChange = () => setTheme(window.__theme)
		window.__onDisplayChange = () => setDisplay(window.__display)
	}, [])
	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/" title="Voltar para Home">
					<S.MenuBarItem>
						<HomeSmile />
					</S.MenuBarItem>
				</S.MenuBarLink>
				<S.MenuBarLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/search/" title="Pesquisar">
					<S.MenuBarItem>
						<Search />
					</S.MenuBarItem>
				</S.MenuBarLink>
			</S.MenuBarGroup>
			<S.MenuBarGroup>
				<S.MenuBarItem
					title="Mudar o tema"
					onClick={() => {
						window.__setPreferredTheme(isDarkMode ? "light" : "dark")
					}}
					className={theme}
				>
					<Lightbulb />
				</S.MenuBarItem>
				<S.MenuBarItem
					title="Mudar visualização"
					onClick={() => {
						window.__setPreferredDisplay(isListMode ? "grid" : "list")
					}}
					className="display"
				>
					{isListMode ? <Grid /> : <List />}
				</S.MenuBarItem>
				<S.MenuBarItem title="Ir para o Topo">
					<UpArrowAlt />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	)
}
export default MenuBar