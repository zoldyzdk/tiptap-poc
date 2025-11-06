import { useEditor, EditorContent, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useRef } from 'react'

const Tiptap = () => {
  const renderCount = useRef(0)
  renderCount.current += 1

  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    content: '<p>Hello World!</p>', // initial content
    // shouldRerenderOnTransaction: false,
  })

//   const providerValue = useMemo(() => ({ editor }), [editor])

  return (
    <>
      <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
        Re-render count: {renderCount.current}
      </div>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
      <EditorText />
    </>
  )
}

export default Tiptap

function EditorText() {
    const { editor } = useCurrentEditor();

    return (
        <code>{editor?.getText()}</code>
    )
}