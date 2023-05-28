export default function SearchCountries({ handleSearch }) {
    return (
    <div role="presentation" className="input-wrapper">
      <input type="text" placeholder="Search for a country..." onInput={handleSearch} />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    )
}