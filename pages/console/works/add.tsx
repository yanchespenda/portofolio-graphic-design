import { getAuth, onAuthStateChanged } from "firebase/auth"
import { NextRouter, useRouter, withRouter } from "next/router"
import dynamic from 'next/dynamic'
import { Component, Fragment, useEffect, useRef, useState } from "react"
import Dropzone, { DropEvent, FileRejection } from 'react-dropzone'
import { Formik } from 'formik'
import { convertToRaw, EditorState, Modifier } from 'draft-js'

import ConsoleHeader from '../../../components/console/Header'
import { firebaseApp } from "../../../firebase/init"

import { EditorProps } from 'react-draft-wysiwyg'
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface IProps {
  router: NextRouter
}
interface IState {
  validateAuth: boolean

  imageCover: File | null
  imageCoverPreview: string | null

  contentEditor: EditorState
}

class ConsoleWorksAdd extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      validateAuth: false,
      imageCover: null,
      imageCoverPreview: null,
      contentEditor: EditorState.createEmpty(),
    }

    this.contentEditorRefresh = this.contentEditorRefresh.bind(this)
  }

  async validateAuth() {
    const fbApp = firebaseApp()
    const fbAuth = getAuth(fbApp)

    onAuthStateChanged(fbAuth, async authData => {
      if (!authData) {
        this.props.router.push('/console/auth')
      } else {
        this.setState({ validateAuth: true })
      }
    })
  }

  contentEditorRefresh(editorState: EditorState) {
    if (this.state.contentEditor)
      this.setState({ contentEditor: editorState })
  }

  handleFile(file: File) {
    this.setState({
      imageCover: file,
      imageCoverPreview: URL.createObjectURL(file),
    })
  }

  handleCoverDrop(acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) {
    console.group("handleCoverDrop")
    console.log("acceptedFiles", acceptedFiles)
    console.log("fileRejections", fileRejections)
    console.log("event", event)
    console.groupEnd()

    const imageFile = acceptedFiles.length > 0 ? acceptedFiles[0] : null
    if (imageFile) this.handleFile(imageFile)
  }

  render() {
    return (
      <Fragment>
        <ConsoleHeader />
        
        <div className="xl:container mx-auto mt-8">
          <div className="flex flex-col items-center">

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  // errors.email = 'Required'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  // errors.email = 'Invalid email address'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="flex max-w-3xl w-full flex-col">

                  {/* Step 1: Title */}
                  <div className="w-full">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="border mt-1 form-input px-4 py-3 rounded w-full" />
                  </div>
                  {/* End Step 1: Title */}

                  {/* Step 2: Description */}
                  <div className="w-full mt-8">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="border mt-1 form-input px-4 py-3 rounded w-full" />
                  </div>
                  {/* End Step 2: Description */}

                  {/* Step 3: Cover */}
                  { this.state.imageCoverPreview && <div className="mt-8 items-center text-center mx-auto flex w-full flex-col">
                    <div className="max-w-[350px] w-full h-auto">
                      <img src={this.state.imageCoverPreview} alt='cover' className="w-full h-full" /> 
                    </div>
                    <div className="whitespace-pre-line break-words">
                      <span> {this.state.imageCover?.name} </span>
                    </div>
                  </div> }
                  <div className="w-full mt-8">
                    <label htmlFor="cover">Cover</label>
                    <Dropzone
                      multiple={false}
                      minSize={0}
                      maxSize={10485760}
                      accept="image/png,image/jpg,image/jpeg,image/gif"
                      onDrop={this.handleCoverDrop}>
                      {({getRootProps, getInputProps}) => (
                        <div className="flex items-center justify-center w-full cursor-pointer" {...getRootProps()}>
                          <div
                            className="flex flex-col w-full h-32 border-4 border-[#9E8B7A] border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Attach a file (jpg, jpeg, png, gif)
                                </p>
                            </div>
                            <input className="opacity-0" {...getInputProps()} />
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </div>
                  {/* End Step 3: Cover */}

                  {/* Step 4: Content */}
                  <div className="w-full mt-8">
                    <label htmlFor="content">Content</label>
                    {/* <input type="text" name="content" id="content" className="border mt-1 form-input px-4 py-3 rounded w-full" /> */}

                    <Editor
                      editorState={this.state.contentEditor}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.contentEditorRefresh}

                      toolbar={
                        {
                          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji'],
                          inline: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                            bold: {
                              icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNS42IDEwLjc5Yy45Ny0uNjcgMS42NS0xLjc3IDEuNjUtMi43OSAwLTIuMjYtMS43NS00LTQtNEg3djE0aDcuMDRjMi4wOSAwIDMuNzEtMS43IDMuNzEtMy43OSAwLTEuNTItLjg2LTIuODItMi4xNS0zLjQyek0xMCA2LjVoM2MuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41aC0zdi0zem0zLjUgOUgxMHYtM2gzLjVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNXoiLz48L3N2Zz4=',
                              className: undefined },
                            italic: {
                              // icon: 'italic',
                              className: undefined },
                            underline: {
                              // icon: 'underline',
                              className: undefined },
                            strikethrough: {
                              // icon: 'strikethrough',
                              className: undefined },
                            monospace: {
                              // icon: 'monospace',
                              className: undefined },
                            superscript: {
                              // icon: 'superscript',
                              className: undefined },
                            subscript: {
                              // icon: 'subscript',
                              className: undefined },
                          },
                          blockType: {
                            inDropdown: true,
                            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                          },
                          fontSize: {
                            // icon: 'fontSize',
                            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                          },
                          list: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['unordered', 'ordered', 'indent', 'outdent'],
                            unordered: { 
                              // icon: 'unordered', 
                              className: undefined },
                            ordered: { 
                              // icon: 'ordered', 
                              className: undefined },
                            indent: { 
                              // icon: 'indent', 
                              className: undefined },
                            outdent: { 
                              // icon: 'outdent', 
                              className: undefined },
                          },
                          textAlign: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['left', 'center', 'right', 'justify'],
                            left: { 
                              // icon: 'left', 
                              className: undefined },
                            center: { 
                              // icon: 'center', 
                              className: undefined },
                            right: { 
                              // icon: 'right', 
                              className: undefined },
                            justify: { 
                              // icon: 'justify', 
                              className: undefined },
                          },
                          colorPicker: {
                            // icon: 'color',
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                              'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                              'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                              'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                              'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                              'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                          },
                          link: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            dropdownClassName: undefined,
                            showOpenOptionOnHover: true,
                            defaultTargetOption: '_self',
                            options: ['link', 'unlink'],
                            link: { 
                              // icon: 'link', 
                              className: undefined },
                            unlink: { 
                              // icon: 'unlink', 
                              className: undefined },
                            linkCallback: undefined
                          },
                          emoji: {
                            // icon: 'emoji',
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            emojis: [
                              '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                              '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                              '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                              '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                              '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                              '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                              '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                              '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                              '✅', '❎', '💯',
                            ],
                          },
                          embedded: {
                            // icon: 'embedded',
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            embedCallback: undefined,
                            defaultSize: {
                              height: 'auto',
                              width: 'auto',
                            },
                          },
                          image: {
                            // icon: 'image',
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            urlEnabled: true,
                            uploadEnabled: true,
                            alignmentEnabled: true,
                            uploadCallback: undefined,
                            previewImage: false,
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            alt: { present: false, mandatory: false },
                            defaultSize: {
                              height: 'auto',
                              width: 'auto',
                            },
                          },
                          remove: { 
                            // icon: 'eraser', 
                            className: undefined, component: undefined },
                          history: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['undo', 'redo'],
                            undo: { 
                              // icon: 'undo', 
                              className: undefined },
                            redo: { 
                              // icon: 'redo', 
                              className: undefined },
                          },
                        }
                      }
                    />
                  </div>
                  {/* End Step 4: Content */}


                  {/* <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /> */}
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>

          </div>
        </div>
        
        <div className="hidden overflow-hidden h-0 w-0">
          <svg id="svg_bold" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ConsoleWorksAdd)
