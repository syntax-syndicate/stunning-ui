import { debounce } from 'lodash-es'
import SplitType, { type SplitTypeOptions, type TypesList } from 'split-type'

type ResizeCallback = () => void

interface TextSplitterOptions {
  resizeCallback?: ResizeCallback
  splitTypeTypes?: TypesList
}

export default class TextSplitter {
  private textElement: HTMLElement
  private onResize: ResizeCallback | null
  private splitText: SplitType
  private previousContainerWidth: number | null
  private splitTextOptions: Partial<SplitTypeOptions>

  constructor(textElement: HTMLElement, options: TextSplitterOptions = {}) {
    if (!textElement) {
      throw new Error('Invalid text element provided.')
    }

    const { resizeCallback, splitTypeTypes } = options

    this.textElement = textElement
    this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null

    const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {}
    this.splitText = new SplitType(this.textElement, splitOptions)
    this.previousContainerWidth = 0
    this.splitTextOptions = splitOptions

    if (this.onResize) {
      this.initResizeObserver()
    }
  }

  private initResizeObserver(): void {
    this.previousContainerWidth = null
    const resizeObserver = new ResizeObserver(
      debounce((entries) => this.handleResize(entries), 100)
    )
    resizeObserver.observe(this.textElement)
  }

  private handleResize(entries: ResizeObserverEntry[]): void {
    const [{ contentRect }] = entries
    const width = Math.floor(contentRect.width)
    if (
      this.previousContainerWidth !== null &&
      this.previousContainerWidth !== width
    ) {
      this.splitText.split(this.splitTextOptions)
      if (this.onResize) {
        this.onResize()
      }
    }
    this.previousContainerWidth = width
  }

  public getLines(): HTMLElement[] | null {
    return this.splitText.lines
  }

  public getWords(): HTMLElement[] | null {
    return this.splitText.words
  }

  public getChars(): HTMLElement[] | null {
    return this.splitText.chars
  }
}
