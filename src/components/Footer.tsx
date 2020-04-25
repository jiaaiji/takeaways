import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    <p
      css={css`
        font-weight: bold;
      `}
    >
      一般社団法人旭川ひとまちコミュニティ
    </p>
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
      <a href="https://ahmc.jp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLink} size="lg" />
      </a>
      <a
        href="https://www.facebook.com/AsahikawaHitoMachiCommunity/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
    </div>
    <div
      css={css`
        font-weight: bold;
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem 0.5rem;
      `}
    >
      合同会社下村総合投資事務所
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
        href="https://github.com/jiaaiji"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
    <div
      css={css`
        font-weight: bold;
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem 0.5rem;
      `}
    >
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
