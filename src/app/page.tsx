import { css } from "@kuma-ui/core";

export default function Home() {
  return (
    <main>
      <h1 className={styles.h1}>Hello World</h1>
    </main>
  );
}

const styles = {
  h1: css`
    font-size: 24px;
  `,
};
