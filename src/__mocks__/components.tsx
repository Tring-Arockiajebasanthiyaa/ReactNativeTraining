// __mocks__/components.tsx
import React from 'react';
import { View, Text as RNText } from 'react-native';

// Atoms
export const Button = (props: any) => <View {...props} />;
export const Text = ({ children, ...props }: any) => <RNText {...props}>{children}</RNText>;
export const Input = (props: any) => <View {...props} />;
export const Spacer = ({ height }: any) => <View style={{ height }} />;
export const Divider = (props: any) => <View {...props} />;

// Molecules
export const SearchBar = (props: any) => <View {...props} />;
export const Card = ({ children, title }: any) => <View>{title}{children}</View>;
export const FormField = (props: any) => <View {...props} />;
export const Badge = ({ label }: any) => <View>{label}</View>;

// Organisms
export const Header = ({ title, subtitle }: any) => <View><RNText>{title} - {subtitle}</RNText></View>;
export const Footer = (props: any) => <View {...props} />;
export const List = (props: any) => <View {...props} />;
export const ScreenContainer = ({ children }: any) => <View>{children}</View>;
