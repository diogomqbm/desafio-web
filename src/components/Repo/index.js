import React from "react";
import styled from "styled-components";

const Repo = (props) => {

  const { owner, name, description, stargazers_count, forks, full_name } = props;

  const Container = styled.a`
    display: block;
    text-decoration: none;
    color: #1c1c1c;
    position: relative;
    padding: 2%;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 2px #f9f9f9;
    width: 90%;
    margin-bottom: 5%;
    &:hover {
      transform: translateY(2px);
    }
  `;

  const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
  `;

  const Description = styled.p`
    font-size: 0.7rem;
    width: 70%;
  `;

  const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const Avatar = styled.div`
    position: absolute;
    right: 2%;
    top: 33%;
    background-image: url(${owner.avatar_url});
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8%;
  `

  return (
    <Container href={full_name}>
        <div>
          <Title>{name}</Title>
          <Description>{description}</Description>
        <Stats>
          <Description><b>Forks:</b> {forks}</Description>
          <Description><b>Stars:</b> {stargazers_count}</Description>
        </Stats>
      </div>
      <Avatar/>
    </Container>
  )
};

export default Repo;