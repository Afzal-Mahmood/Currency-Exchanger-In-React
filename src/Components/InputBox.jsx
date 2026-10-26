import React, { useId } from "react";

function InputBox({
  label,
  Amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "pkr",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div>
      <div className="bg-white flex rounded-lg p-4 text-sm my-2 ">
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            className="w-full px-4 py-4 text-xl font-semibold rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="0"
            id={amountInputId}
            disabled={amountDisable}
            value={Amount}
            
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="flex flex-wrap justify-end text-right w-1/2">
          <label className="text-black/40 mb-2 w-full">Currency Type</label>
          <select
            className="px-4 py-3 rounded-xl border border-gray-300 bg-white font-semibold focus:ring-2 focus:ring-blue-500"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
