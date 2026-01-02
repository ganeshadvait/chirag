import Link from "next/link";
import DoctorsData from "../../doctorsdata/doctorsdata";


const slugify = (s = "") =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function DoctorsDepartmentPage({ params }) {
  const deptParam = params?.department ?? "";

  const deptKey = Object.keys(DoctorsData).find(
    (k) =>
      k === deptParam ||
      decodeURIComponent(deptParam) === k ||
      slugify(k) === slugify(deptParam)
  );

  if (!deptKey) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Department not found</h1>
      </main>
    );
  }

  const doctors = DoctorsData[deptKey];

  return (
    <main style={{ padding: 24 }}>
      <h1>{deptKey}</h1>
      <ul>
        {Object.keys(doctors).map((name) => (
          <li key={name} style={{ margin: "8px 0" }}>
            <Link
              href={`/doctors/${encodeURIComponent(deptKey)}/${slugify(name)}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
