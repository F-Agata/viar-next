import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import useForm from './useForm'
import validationRules from './validationRules'

import { BiEnvelope } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineUnsubscribe } from 'react-icons/md'

import Box from '../../../../styles/Box'
import Btn from '../../../../styles/Btn'
import TitleAndText from '../../../../styles/TitleAndText'

function FormPanel({ submittedForm }) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validationRules,
    submittedForm,
  )

  return (
    <WrappPanel onSubmit={handleSubmit} noValidate>
      <WrappOnePartOfForm>
        <LableF htmlFor={'email'}>E-mail</LableF>
        <BoxWrapInputAndIcone>
          <InputF
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'e-mail'}
            value={values.email}
            onChange={handleChange}
          />
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <StyledBiEnvelope />
          </Box>
        </BoxWrapInputAndIcone>
        {errors.email && (
          <TitleAndText
            variant={'textMiddle'}
            color={'colorSecondary'}
            textAlign={'left'}
            m={'10px 0'}
          >
            {errors.email}
          </TitleAndText>
        )}
      </WrappOnePartOfForm>

      <WrappOnePartOfForm>
        <LableF htmlFor={'phone'}>Phone number</LableF>
        <BoxWrapInputAndIcone>
          <InputF
            type={'number'}
            id={'phone'}
            name={'phone'}
            placeholder={'phone number'}
            value={values.phone}
            onChange={handleChange}
          />
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <StyledBsTelephone />
          </Box>
        </BoxWrapInputAndIcone>
        {errors.phone && (
          <TitleAndText
            variant={'textMiddle'}
            color={'colorSecondary'}
            textAlign={'left'}
            m={'10px 0'}
          >
            {errors.phone}
          </TitleAndText>
        )}
      </WrappOnePartOfForm>
      <WrappOnePartOfForm>
        <LableF htmlFor={'message'}>Message</LableF>
        <TextAreaF
          type={'text'}
          id={'message'}
          name={'message'}
          placeholder={'message'}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && (
          <TitleAndText
            variant={'textMiddle'}
            color={'colorSecondary'}
            textAlign={'left'}
            m={'10px 0'}
          >
            {errors.message}
          </TitleAndText>
        )}
      </WrappOnePartOfForm>
      <WrappOnePartOfForm>
        <LableF htmlFor={'accept'}>Subscribe newsletter</LableF>
        <WrappInputCheckbox>
          <BoxWrappText>
            <TitleAndText
              variant={'textSmall'}
              color={'colorBtn2'}
              textAlign={'center'}
              m={'10px 0'}
            >
              Chcę otrzymywać newsletter
            </TitleAndText>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <StyledMdOutlineUnsubscribe />
            </Box>
          </BoxWrappText>
          <InputFCh
            type={'checkbox'}
            name={'accept'}
            id={'accept'}
            checked={values.accept}
            onChange={handleChange}
          />
        </WrappInputCheckbox>
      </WrappOnePartOfForm>
      <Box
        // border={'orange 2px solid'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Btn
          variant="orangeDark"
          type={'submit'}
          m={'20px 0 0 0 '}
          width={{ _: '100%', tablet: '48%', tabletL: '30%' }}
        >
          {' '}
          Send
        </Btn>
      </Box>
    </WrappPanel>
  )
}
export default FormPanel

const WrappPanel = styled.form`
  width: 100%;
  //border: chartreuse 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
`

const WrappOnePartOfForm = styled(Box)`
  //border: #0070f3 solid 2px;
  width: 295px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: 568px) {
    width: 448px;
  }
  @media (min-width: 768px) {
    width: 303px;
  }
  @media (min-width: 1024px) {
    width: 459px;
  }
  @media (min-width: 1140px) {
    width: 255px;
  }
`

const LableF = styled.label`
  //border: #0023f3 solid 2px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fs7};
    font-weight: ${theme.fontWeights.fontRegular};
    color: ${theme.colors.colorPrimary};
  `};
  line-height: 24px;
  width: 100%;
`

const BoxWrapInputAndIcone = styled(Box)`
  // border: greenyellow 2px solid;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
  `};
`

const InputF = styled.input`
  width: 100%;
  line-height: 24px;
  padding: 0 20px 0 0;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fs7};
    font-weight: ${theme.fontWeights.fontRegular};
    color: ${theme.colors.colorPrimary};
    border: ${theme.colors.colorWhite} 2px solid;
  `};
  ::placeholder {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.fs7};
      font-weight: ${theme.fontWeights.fontRegular};
      color: ${theme.colors.colorBtn2};
    `}
  }
  :focus {
    border: ${(props) => props.theme.colors.colorWhite} 2px solid;
  }
`

const TextAreaF = styled.textarea`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fs7};
    font-weight: ${theme.fontWeights.fontRegular};
    color: ${theme.colors.colorPrimary};
    border: ${theme.colors.colorWhite} 2px solid;
  `};
  line-height: 24px;
  min-height: 100px;
  min-width: 100px;
  padding: 20px 20px;
  border-radius: 8px;
  ::placeholder {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.fs7};
      font-weight: ${theme.fontWeights.fontRegular};
      color: ${theme.colors.colorBtn2};
    `}
    font-family:  'Montserrat', sans-serif;
  }
  :focus {
    border: ${(props) => props.theme.colors.colorWhite} 2px solid;
  }
  @media (min-width: 768px) {
    min-height: 64px;
    height: 64px;
    min-width: 0px;
  }
`

const WrappInputCheckbox = styled(Box)`
  //border: blueviolet 2px solid;
  width: 294px;
  height: 64px;
  display: flex;
  justify-content: start;
  @media (min-width: 568px) {
    width: 448px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`

const BoxWrappText = styled(Box)`
  //border: blueviolet 2px solid;
  width: 294px;
  height: 64px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
  `};
  @media (min-width: 568px) {
    width: 448px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`

const InputFCh = styled.input`
  //border: orange 2px solid;
  position: absolute;
  cursor: pointer;
  width: 0px;
  height: 0px;
  background-color: transparent;
  :before {
    content: '';
    display: block;
    position: absolute;
    width: 294px;
    height: 60px;
    border-radius: 8px;
    ${({ theme }) => css`
      border: ${theme.colors.colorSecondary} 2px dashed;
    `};
    @media (min-width: 568px) {
      width: 448px;
    }
    @media (min-width: 768px) {
      width: 303px;
    }
    @media (min-width: 1024px) {
      width: 459px;
    }
    @media (min-width: 1140px) {
      width: 255px;
    }
  }
  :checked:before {
    content: '';
    display: block;
    position: absolute;
    width: 294px;
    height: 60px;
    border-radius: 8px;
    transition: 0.3s;
    ${({ theme }) => css`
      border: ${theme.colors.colorSecondary} 2px dashed;
      background-color: ${theme.colors.colorWhite};
    `};
    @media (min-width: 568px) {
      width: 448px;
    }
    @media (min-width: 768px) {
      width: 303px;
    }
    @media (min-width: 1024px) {
      width: 459px;
    }
    @media (min-width: 1140px) {
      width: 255px;
    }
  }
  :after {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border: ${(props) => props.theme.colors.colorPrimary} solid;
    border-width: 0 0px 0px 0;
    ransform: rotate(180deg);
    position: absolute;
    top: 0px;
    left: 50px;
    transition: 0.3s;
  }
  :checked:after {
    content: '';
    display: block;
    width: 8px;
    height: 20px;
    border: ${(props) => props.theme.colors.colorSecondary} solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 20px;
    left: 20px;
  }
`

const StyledBiEnvelope = styled(BiEnvelope)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.colorBtn2};
    background-color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
  `};
`

const StyledBsTelephone = styled(BsTelephone)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.colorBtn2};
    background-color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
  `};
`

const StyledMdOutlineUnsubscribe = styled(MdOutlineUnsubscribe)`
  width: 24px;
  height: 24px;
  ${({ theme }) => css`
    color: ${theme.colors.colorBtn2};
    background-color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
  `};
`
