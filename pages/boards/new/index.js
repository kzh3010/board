import { useState } from "react";
import {
  Base,
  Title,
  SubTitle,
  FirstWrapper,
  Writer,
  Password,
  ContentWrapper,
  Subject,
  Contents,
  AddressWrapper,
  Address,
  AddressButton,
  AddressDetail,
  YoutubeLink,
  ImageWrapper,
  ImageButton,
  PlusIcon,
  PlusContent,
  MainSetting,
  MainSettingButton,
  MainSettingTitle,
  SubmitWrapper,
  SubmitButton,
  Error,
} from "../../../styles/emotion";

export default function Board() {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
  };

  const onClickSubmit = () => {
    if (writer && password && title && contents) {
      alert("게시글이 등록되었습니다!");
    }
    if (!writer) {
      setWriterError("작성자를 입력해주세요");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (!writer) {
      setContentsError("내용을 입력해주세요");
    }
    if (!writer) {
      setTitleError("제목을 입력해주세요");
    }
  };

  return (
    <Base>
      <Title>게시글 등록</Title>
      <FirstWrapper>
        <ContentWrapper>
          <SubTitle>작성자</SubTitle>
          <Writer
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </ContentWrapper>
        <ContentWrapper>
          <SubTitle>비밀번호</SubTitle>
          <Password
            type="password"
            placeholder="비밀번호를 설정해주세요"
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </ContentWrapper>
      </FirstWrapper>
      <ContentWrapper>
        <SubTitle>제목</SubTitle>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </ContentWrapper>
      <ContentWrapper>
        <SubTitle>내용</SubTitle>
        <Contents
          placeholder="내용을 작성해주세요"
          onChange={onChangeContents}
        />
        <Error>{contentsError}</Error>
      </ContentWrapper>
      <ContentWrapper>
        <SubTitle>주소</SubTitle>
        <AddressWrapper>
          <Address placeholder="07250" />
          <AddressButton>우편번호 검색</AddressButton>
        </AddressWrapper>
        <AddressDetail />
        <AddressDetail />
      </ContentWrapper>
      <ContentWrapper>
        <SubTitle>유튜브</SubTitle>
        <YoutubeLink placeholder="링크를 복사해주세요" />
      </ContentWrapper>
      <ImageWrapper>
        <SubTitle>사진첨부</SubTitle>
        <ImageButton>
          <PlusIcon>+</PlusIcon>
          <PlusContent>Upload</PlusContent>
        </ImageButton>
        <ImageButton>
          <PlusIcon>+</PlusIcon>
          <PlusContent>Upload</PlusContent>
        </ImageButton>
        <ImageButton>
          <PlusIcon>+</PlusIcon>
          <PlusContent>UPload</PlusContent>
        </ImageButton>
      </ImageWrapper>
      <MainSetting>
        <SubTitle>메인설정</SubTitle>
        <MainSettingButton type="radio" id="youtube" name="radio-button" />
        <MainSettingTitle htmlFor="youtube">유튜브</MainSettingTitle>
        <MainSettingButton type="radio" id="image" name="radio-button" />
        <MainSettingTitle htmlFor="image">사진</MainSettingTitle>
      </MainSetting>
      <SubmitWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </SubmitWrapper>
    </Base>
  );
}
