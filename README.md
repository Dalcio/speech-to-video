# audio-to-video

This project was generated with [superplate](https://github.com/pankod/superplate).

## Getting Started

superplate is a Next.js all-in-one project generator. Create your project with the tools you need without spending hours on setting them up.

Every plugin comes with an example to give you a brief knowledge about their usage.

## Available Scripts

### Running the development server.

```bash
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```

### Linting & formatting your code.

```bash
    yarn lint
```

### Running your tests.

```bash
    yarn test
```

## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).

### **Styled Components**

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.

[Go To Documentation](https://styled-components.com/docs)

### **Fetch**

Next.js has a built-in polyfill for the fetch API. You don&#39;t need to worry about using it on either server or client side.

[Go To Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### **Axios**

Promise based HTTP client for the browser and node.js.

[Go To Documentation](https://github.com/axios/axios)

### **SVGR**

Transform SVGs into React components.

[Go To Documentation](https://react-svgr.com/docs/getting-started/)

### **next-translate**

Tiny and powerful i18n tools (Next plugin + API) to translate your Next.js pages.

[Go To Documentation](https://github.com/vinissimus/next-translate)

### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)

### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)

### **lint-staged**

The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)

### **Testing Library**

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils.

[Go To Documentation](https://testing-library.com/docs/)

### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)

## License

MIT

common pt
{
    "name": "Speech to Video",
    "hello": "Diga olá ao ",
    "img-description": "Fluxo de transformação de audio ou fala para vídeo",
    "app-description": "O Speech to Video, transforma o seu discurso em um conjunto de imagens gerando um video que corresponde a junção das imagens com o seu discurso.",
    "language": "Pt to English",
    "errors": {
        "something-wrong": "Aconteu Alguma coisa na busca de imagens."
    },
    "record": {
        "media_aborted": "Mídia abortada",
        "permission_denied": "permissão negada",
        "no_specified_media_found": "Nenhuma mídia especificada encontrada",
        "media_in_use": "Mídia em uso",
        "invalid_media_constraints": "Restrições de mídia inválidas",
        "no_constraints": "Sem restrições",
        "recorder_error": "Erro do gravador",
        "idle": "Ocioso",
        "acquiring_media": "Aquisição de mídia",
        "recording": "Gravando",
        "stopping": "Parando",
        "stopped": "Parado"
    }
}
en
{
    "name": "Speech to Video",
    "hello": "Sey Hello to ",
    "img-description": "Speech to video transform flow",
    "app-description": "Speech to Video transforms your speech into a set of images generating a video that corresponds to the junction of the images with your speech.",
    "language": "En para Português",
    "errors": {
        "something-wrong": "Something happened in the search for images."
    },
    "record": {
        "media_aborted": "Media aborted",
        "permission_denied": "Permission denied",
        "no_specified_media_found": "No specified media found",
        "media_in_use": "Media in use",
        "invalid_media_constraints": "Invalid media constraints",
        "no_constraints": "No constraints",
        "recorder_error": "Recorder error",
        "idle": "Idle",
        "acquiring_media": "Acquiring media",
        "recording": "Recording",
        "stopping": "Stopping",
        "stopped": "Stopped"
    }
}

´´´´´´´´

import React, { FC } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '@app-data';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';

export const RecordButton: FC<AudioProps> = ({ setShow, show, setStep }) => {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: false, audio: true });

    const { setAudioFile } = useApp();

    const start = () => () => {
        setShow('record');
        alert(status);
        startRecording();
    };

    const stop = () => () => {
        stopRecording();
        // setStep(2);
    };

    return (
        <>
            <h1>{status}</h1>
            <RecordContainer
                onClick={(show === 'record' && stop) || start}
                show={show === 'record'}
                status={status}
            >
                <FontAwesomeIcon icon={faMicrophone} id="text" />
            </RecordContainer>
        </>
    );
};
*******
    import { StatusMessages } from 'react-media-recorder';
import styled from 'styled-components';

type RecordContainerProps = {
    show: boolean;
    status: StatusMessages;
};

export const RecordContainer = styled.button<RecordContainerProps>`
    cursor: pointer;
    width: 96px;
    height: 96px;
    border: none;
    border-radius: 100%;
    background-color: red;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    text-align: center;

    &:hover {
        opacity: 0.8;
    }

    ${({ show }) => {
        if (show) {
            return `animation: move-rl 1s;`;
        }
    }}

    ${({ status }) => {
        if (status === 'recording') {
            return `animation: recording 1.2s infinite;`;
        }
    }}
    
    @keyframes move-rl {
        0% {
            margin-left: calc(50% - 48px);
        }
    }

    @keyframes recording {
        0% {
            border: 10px solid black;
        }
        25% {
            border: 20px solid black;
        }
        50% {
            border: 30px solid black;
        }
        75% {
            border: 40px solid black;
        }
        100% {
            border: 50px solid black;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: 20px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }
`;
