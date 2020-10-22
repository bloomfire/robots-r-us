import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";

const defaultAvatar = "https://robohash.org/autautet.bmp?size=100x100&set=set2";

const Avatar = ({ avatarUrl, avatarAlt }) => (
  <AvatarContainer noAvatar={avatarUrl === null}>
    <StyledImage noAvatar={avatarUrl === null} src={avatarUrl ? avatarUrl : defaultAvatar} alt={avatarAlt} />
  </AvatarContainer>
);

const AvatarContainer = styled.div`
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: ${({ noAvatar }) => (noAvatar ? colors.white : colors.tan)};
  overflow: hidden;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
  filter: ${({ noAvatar }) => noAvatar && "grayscale(100%)"};
  opacity: ${({ noAvatar }) => (noAvatar ? 0.65 : 1)};
`;

export default Avatar;
