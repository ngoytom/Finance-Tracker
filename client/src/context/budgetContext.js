import React, { useState } from 'react'

const BudgetContext = React.createContext()
const BudgetUpdateContext = React.createContext()

export function budgetContext({ children }) {
    const [budgetTotal, setBudgetTotal] = useState(0)

    function getBudgetTotal(){
        setBudgetTotal(budgetTotal)
    }

    return (
        <BudgetContext.Provider value={budgetTotal}>
            <BudgetUpdateContext.Provider value={getBudgetTotal}>
                {children}
            </BudgetUpdateContext.Provider>
        </BudgetContext.Provider>
    )
}

export default budgetContext
