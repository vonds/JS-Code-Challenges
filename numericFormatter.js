const numericFormatter = (template, num ='1234567890', i = 0) => {
    return template.replace(/[a-z]/gi, () => {
        return num[(i++) % num.length]
    })
}