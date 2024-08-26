import * as ts from 'typescript'

const ctx: Worker = self as any

ctx.addEventListener('message', (event) => {
  const { code } = event.data
  executeCode(code)
})

function executeCode(code: string) {
  const wrappedCode = `
    const __console = {
      log: (...args) => postMessage({ type: 'log', data: args }),
      error: (...args) => postMessage({ type: 'error', data: args }),
      warn: (...args) => postMessage({ type: 'warn', data: args }),
    };
    const console = __console;
    try {
      ${code}
    } catch (error) {
      __console.error(error);
    }
  `

  try {
    const result = ts.transpileModule(wrappedCode, {
      compilerOptions: {
        module: ts.ModuleKind.None,
        target: ts.ScriptTarget.ES2015,
        strict: true
      }
    })

    const executionFn = new Function(result.outputText)
    executionFn()
    postMessage({ type: 'done' })
  } catch (error: any) {
    postMessage({ type: 'error', data: [error.message] })
  }
}

export {} // This export is needed to make TypeScript treat this as a module
