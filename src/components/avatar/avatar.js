import React from "react";
import styled from "styled-components";

const defaultAvatar = "https://robohash.org/autautet.bmp?size=100x100&set=set2";

const Avatar = ({ avatarUrl, avatarAlt }) => (
  <AvatarContainer>
    <StyledImage src={avatarUrl ? avatarUrl : defaultAvatar} alt={avatarAlt} />
  </AvatarContainer>
);

const AvatarContainer = styled.div`
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: grey;
  overflow: hidden;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
`;

export default Avatar;
