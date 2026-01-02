import Link from "next/link";
import DoctorsData from "../doctorsdata/doctorsdata";

const slugify = (s = "") =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function DoctorsPage() {
  const departments = Object.keys(DoctorsData);

  return (
    <main style={{ padding: 24 }}>
      <h1>Doctors</h1>
      <ul>
        {departments.map((dept) => (
          <li key={dept} style={{ margin: "12px 0" }}>
            <h2>{dept}</h2>
            <ul>
              {Object.keys(DoctorsData[dept]).map((name) => (
                <li key={name}>
                  <Link
                    href={`/doctors/${encodeURIComponent(dept)}/${slugify(
                      name
                    )}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
