import styled from 'styled-components';

export const Colours = {
  primary: '',
};

const Breakpoints = {
  sm: '420px',
  med: '768px',
  lg: '1040px',
  xl: '1280px',
  xxl: '1440px',
};

export const BreakPoints = {
  smallOnly: `(max-width: ${Breakpoints.sm})`,
  smallUp: `(min-width: ${Breakpoints.sm})`,
  betweenSmallAndLarge: `(min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.lg})`,
  betweenSmallAndMedium: `(min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.med})`,
  medDown: `(max-width: ${Breakpoints.med})`,
  medUp: `(min-width: ${Breakpoints.med})`,
  largeDown: `(max-width: ${Breakpoints.lg})`,
  largeUp: `(min-width: ${Breakpoints.lg})`,
  xlargeDown: `(max-width: ${Breakpoints.xl})`,
  xlargeUp: `(min-width: ${Breakpoints.xl})`,
  xxlargeUp: `(min-width: ${Breakpoints.xxl})`,
  xxlargeDown: `(max-width: ${Breakpoints.xxl})`,
};

const Title = styled.h2`
  width: max-content;
  font-size: 3.5rem;
  justify-self: center;
  align-self: center;
`;

export const PageTitle = Title