import styled from "@emotion/styled";
import { syntaxError } from "graphql";

export const Base = styled.div`
  width: 1200px;

  margin: 100px;
  padding-top: 80px;
  padding-left: 102px;
  padding-right: 102px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
`;

export const FirstWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Writer = styled.input`
  height: 52px;
  width: 486px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  height: 52px;
  width: 486px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ContentWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  height: 480px;
  width: 996px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Address = styled.input`
  padding-left: 16px;
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const AddressButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  cursor: pointer;
  color: white;
  background-color: black;
`;

export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const YoutubeLink = styled.input`
  height: 52px;
  width: 996px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const PlusIcon = styled.div`
  font-size: 24px;
  color: #4f4f4f;
`;
export const PlusContent = styled.div`
  color: #4f4f4f;
`;

export const MainSetting = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const MainSettingButton = styled.input`
  cursor: pointer;
`;
export const MainSettingTitle = styled.label`
  font-weight: 500;
  margin-left: 8px;
  margin-right: 20px;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: orange;
`;
