import MainPage from './main';

type AppProps = {
  proposals: number;
}

export default function App({proposals}: AppProps) {
  return <MainPage proposals={proposals}></MainPage>;
}