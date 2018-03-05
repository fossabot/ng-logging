declare var module: NodeModule;

interface NodeModule {
    // SystemJS module definition
    id: string;
}

declare var process: Process;

interface ProcessEnv {
    [key: string]: string | undefined;
}

interface Process {
    env: ProcessEnv;
}

// interface GlobalEnvironment {
//    ENV: string;
// }

// interface Global extends GlobalEnvironment { }
