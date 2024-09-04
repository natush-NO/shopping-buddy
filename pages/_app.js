import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  // const sortedDefaultTasks = sortedByDate(initialTasks);
  // const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
