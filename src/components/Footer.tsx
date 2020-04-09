import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";

export default () => (
  <div
    css={css`
      background: #221f1f;
      color: #7e7373;
      margin-top: 1.45rem;
      padding: 2rem;
      text-align: center;
    `}
  >
    <div>
      <p
        css={css`
          font-weight: bold;
        `}
      >
        旭川ひとまちコミュニティ（一般社団法人登記準備中）
      </p>
      <p
        css={css`
          margin: 0.5rem 0;
        `}
      >
        &bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;
      </p>
      <p>合同会社 下村総合投資事務所</p>
      <p
        css={css`
          margin: 0.5rem 0;
        `}
      >
        &bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;
      </p>
      お持ち帰りごはん by 釧路OSSコミュニティ
    </div>
    <div
      css={css`
        a {
          margin-bottom: 2rem;
          margin-left: 1rem;

          &:first-of-type {
            margin-left: 0;
          }
        }
      `}
    >
      <a
        href="https://github.com/946oss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        href="https://twitter.com/946oss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
    </div>
  </div>
);
