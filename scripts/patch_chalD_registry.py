import json

with open("src/config/export-registry.json", "r") as f:
    registry = json.load(f)

# The new slides for challenge D
new_slides = [
  { "slideId": "s03-d-intro", "title": "Aufgabenstellung" },
  { "slideId": "s03-d-scen", "title": "Use Case Scenarios" },
  { "slideId": "s03-d-out", "title": "Outcome" },
  { "slideId": "s03-d-work", "title": "Methodik & Pipeline" },
  { "slideId": "s03-d-assess", "title": "Bewertungsschema" }
]

# Find index of s03-chalD1-scen and s03-chalD1-task to remove them
indices_to_remove = []
for i, slide in enumerate(registry):
    if slide["slideId"] == "s03-chalD1-scen" or slide["slideId"] == "s03-chalD1-task":
        indices_to_remove.append(i)

if len(indices_to_remove) > 0:
    insert_index = indices_to_remove[0]
    
    # Remove old
    registry = [slide for slide in registry if slide["slideId"] not in ["s03-chalD1-scen", "s03-chalD1-task"]]
    
    # Insert new
    for idx, new_slide in enumerate(new_slides):
        registry.insert(insert_index + idx, {
            "slideId": new_slide["slideId"],
            "block": "B03",
            "order": 0,
            "exportId": f"living-syllabus:{new_slide['slideId']}",
            "exportName": "",
            "figmaPageName": "Living Syllabus",
            "exportStatus": "draft",
            "title": new_slide["title"]
        })

# Re-index
current_order = 1
current_block = registry[0]["block"]
for slide in registry:
    if slide["block"] != current_block:
        current_block = slide["block"]
        current_order = 1
    
    slide["order"] = current_order
    slide["exportName"] = f"{slide['block']}-{current_order:02d} \u00b7 {slide['title']}"
    current_order += 1

with open("src/config/export-registry.json", "w") as f:
    json.dump(registry, f, indent=2)

print("Registry successfully patched and re-indexed!")
