import React from 'react';

// vertical-align: top; height: 12px; font-size: 12px; line-height: 12px;

// vertical-align: top; height: 70px; line-height: 70px; font-size: 70px;

// vertical-align: top; height: 63px; line-height: 63px; font-size: 63px;

// vertical-align: top; height: 25px; line-height: 25px; font-size: 25px;


const HeroSeparator = ({style}) => (
	<tr>
		<td style={style} valign="top">
			&nbsp;
		</td>
	</tr>
);

export default HeroSeparator;