import { basicSetup, EditorView } from 'codemirror'
import { vim } from "@replit/codemirror-vim"

const maze = `l   j                                     
══╗   ╔══════════════╦═══════════════════╗
  ║   ║              ║ 16l               ║
  ║   ║   ╔══════╗   ║   ╔════════════   ║
  ║   ║   ║      ║   ║   ║               ║
  ║   ║   ║      ║   ║   ║   ╔═══════════╣
  ║   ║   ╚══════╣   ║   ║   ╚═══════════╣
  ║   ║        h ║       ║               ║
  ║   ╚═══════   ╠═══════╩════════════   ║
  ║ l          k ║                   20h ║
  ╚══════════════╝   ════════════════════╝
                                          `

const view = new EditorView({
  doc: maze,
  extensions: [
    vim(),
    basicSetup,
  ],
  parent: document.querySelector('#editor'),
})

view.focus()