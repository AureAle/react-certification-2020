import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 64px;
  justify-content: space-between;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  color: #fff;
  background-color: ${(props) => (props.isDark ? '#4a0039' : '#ff6868')};
  box-sizing: border-box;
  align-items: center;
  padding: 1em;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Alignment = styled.div`
  float: ${(props) => props.float};
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.div`
  color: #fff;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
