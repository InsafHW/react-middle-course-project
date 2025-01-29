function classNames(
    mainClassName: string,
    mods: Record<string, boolean | string>,
    ...extraClasses: string[]
): string {
    let finalClassName = mainClassName

    Object.entries(mods).forEach(([key, value]) => {
        if (typeof value === 'boolean' && value) {
            finalClassName += ` ${key}`
            return
        }

        finalClassName += ` ${key}_${value}`
    })

    extraClasses.forEach((extraClassName) => {
        finalClassName += ` ${extraClassName}`
    })

    return finalClassName
}

export {
    classNames,
}