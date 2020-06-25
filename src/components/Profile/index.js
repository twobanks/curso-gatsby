import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
	const {
		site: {
			siteMetadata: { author, position, description },
		},
	} = useStaticQuery(graphql`
		query MySiteMetadata {
			__typename
			site {
				siteMetadata {
					author
					description
					position
					title
				}
			}
		}
	`)
	return (
		<S.ProfileWrapper>
			<S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
				<Avatar/>
				<S.ProfileAuthor>
					{author}
					<S.ProfilePosition>{position}</S.ProfilePosition>	
				</S.ProfileAuthor>
			</S.ProfileLink>
			<S.ProfileDescription>{description}</S.ProfileDescription>
		</S.ProfileWrapper>
	)
}

export default Profile