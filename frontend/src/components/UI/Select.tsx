import { MouseEvent, useMemo, useState } from 'react'
import { IDefaultOption } from '../sort/types'
import { SelectDefaultList } from './SelectDefaultList'

type Props = {
  options: IDefaultOption[]
  onChange: (e: MouseEvent<HTMLDivElement>) => void
  value: string
  className?: string
}

const Select = ({ className, value, onChange, options }: Props) => {
  const [showed, setShowed] = useState(false)
  const selectedFullOption = useMemo(() => options.find((option) => option.value === value), [value, onChange])

  return (
    <div
      className={`my-select  ${className ?? ''} ${showed ? 'opened' : 'closed'}`}
      onClick={() => setShowed((v) => !v)}
    >
      <span className="selected">{selectedFullOption?.name}</span>
      <SelectDefaultList setShowed={setShowed} onChange={onChange} options={options} showed={showed} />
    </div>
  )
}

export { Select }
