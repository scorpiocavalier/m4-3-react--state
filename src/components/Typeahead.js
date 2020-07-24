import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: #5227C9;
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
`

const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputWrapper = styled.div`
  width: 600px;
`

const SuggestionWrapper = styled.ul`
  box-shadow: 2px 2px 5px 5px lightgray;
  width: 600px;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 10px;
`

const Suggestion = styled.li`
  padding: 5px;
  background-color: ${ ({ isSelected }) => isSelected && "lightyellow" };
`

const BoldText = styled.span`
  font-weight: 600;
`

const InText = styled.span`
  font-style: italic;
`

const CategoryText = styled(InText)`
  color: purple;
`

export default ({ data: { categories, books: suggestions }, handleSelect }) => {
  const [value, setValue] = useState('')
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0)
  const matchedSuggestions = value.length > 1 && suggestions.filter(({ title }) => {
    return title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          onChange={ev => setValue(ev.target.value)}
          onKeyDown={ev => {
            switch(ev.key) {
              case "Enter": {
                handleSelect(ev.target.value)
                return
              }
              case "ArrowUp": {
                if(selectedSuggestionIndex > 0)
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1)
                return
              }
              case "ArrowDown": {
                if(selectedSuggestionIndex < matchedSuggestions.length - 1)
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1)
                return
              }
              default: return
            }
          }}
        />
        <Button onClick={() => setValue('')}>Clear</Button>
      </InputWrapper>

      {
        matchedSuggestions.length > 0 && value !== '' &&
        <SuggestionWrapper>
        {
          matchedSuggestions.map(({ id, title, categoryId }, index) => {
            const pivotIndex  = title.toLowerCase().indexOf(value.toLowerCase())
            const firstPart   = title.slice(0, pivotIndex + value.length)
            const secondPart  = title.slice(pivotIndex + value.length)
            const category    = categories[categoryId].name
            const isSelected  = index === selectedSuggestionIndex

            return (
              <Suggestion
                key={id}
                value={index}
                isSelected={isSelected}
                onClick={() => handleSelect(title)}
                onMouseEnter={ev => setSelectedSuggestionIndex(ev.currentTarget.value)}
              >
                {firstPart}
                <BoldText>{secondPart}</BoldText>
                <InText>{` in `}</InText>
                <CategoryText>{category}</CategoryText>
              </Suggestion>
            )
          })
        }
        </SuggestionWrapper>
      }
    </Wrapper>
  )
}