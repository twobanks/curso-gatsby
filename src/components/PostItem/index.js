import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const PostItem = ({slug, background, category, title, date, timeToRead, description}) => (
	<S.PostItemLink cover direction="right" bg={getThemeColor()} duration={0.6} to={slug}>
		<S.PostItemWrapper>
			<S.PostItemTag background={background}>{category}</S.PostItemTag>
			<S.PostItemInfo>
				<S.PostItemDate>{date} • {timeToRead}</S.PostItemDate>
				<S.PostItemTitle>{title}</S.PostItemTitle>
				<S.PostItemDescription>{description}.</S.PostItemDescription>
			</S.PostItemInfo>
		</S.PostItemWrapper>
	</S.PostItemLink>
)
PostItem.propTypes = {
	slug: PropTypes.string.isRequired,
	background: PropTypes.string,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}
export default PostItem