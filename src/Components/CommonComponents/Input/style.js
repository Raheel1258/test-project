import styled from "styled-components";

const MainInputContainer = styled.div`

`;

const Input = styled.input`
font-size: 14px;
width:100%;
`;

const Label = styled.div`
color:gray;
padding-top: 13px;
padding-bottom: 13px;
`
const ImportantTag = styled.span`
    color:red;
`
const ErrorField=styled.div`
color:red;
font-size:10px;
`

export { MainInputContainer, Input,Label,ImportantTag,ErrorField };
