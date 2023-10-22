import { basicSetup, EditorView } from 'codemirror'
import { vim } from "@replit/codemirror-vim"

const view = new EditorView({
  doc: "",
  extensions: [
    vim(),
    basicSetup,
  ],
  parent: document.querySelector('#editor'),
})

view.focus()