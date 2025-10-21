# Design System Guide - Gigwork Frontend

## Giới thiệu

Tài liệu này mô tả cách sử dụng design system của Gigwork Frontend. Design system được xây dựng dựa trên các token CSS để đảm bảo tính nhất quán trong toàn bộ ứng dụng.

## Cấu trúc Design System

Design system được tổ chức thành các token và utility classes:

```
src/style/tokens/
├── _border-radius.css  # Border radius tokens
├── _breakpoints.css    # Breakpoints và responsive design
├── _color.css          # Color tokens
├── _shadow.css         # Shadow tokens
├── _spacing.css        # Spacing tokens
├── _themes.css         # Theme tokens
├── _typhography.css    # Typography tokens và utilities
└── index.css           # Import tất cả tokens
```

## 1. Typography

### Tokens

Typography tokens được chia thành 3 nhóm chính:

- **Display**: Cho tiêu đề lớn, hero sections (`d1`, `d2`)
- **Header**: Cho các tiêu đề (`h1`, `h2`, `h3`)
- **Body**: Cho nội dung văn bản, có 3 kích thước (`lg`, `md`, `sm`) và 3 độ đậm (`bold`, `medium`, `light`)

### Utility Classes

```html
<!-- Display -->
<h1 class="text-d1">Display 1</h1>
<h1 class="text-d2">Display 2</h1>

<!-- Headers -->
<h1 class="text-h1">Header 1</h1>
<h2 class="text-h2">Header 2</h2>
<h3 class="text-h3">Header 3</h3>

<!-- Body text -->
<p class="text-lg-bold">Body large bold</p>
<p class="text-lg-medium">Body large medium</p>
<p class="text-lg-light">Body large light</p>

<p class="text-md-bold">Body medium bold</p>
<p class="text-md-medium">Body medium medium</p>
<p class="text-md-light">Body medium light</p>

<p class="text-sm-bold">Body small bold</p>
<p class="text-sm-medium">Body small medium</p>
<p class="text-sm-light">Body small light</p>
```

## 2. Spacing

### Tokens

Spacing tokens được xây dựng trên scale 4px (0.25rem) và được mở rộng để phục vụ nhiều mục đích khác nhau:

- **Base spacing**: `--space-0` đến `--space-48`
- **Spacing kế thừa**: margin (m-0 đến m-8), padding (p-0 đến p-8) và gap (gap-0 đến gap-8)

### Lý do mở rộng và kế thừa spacing tokens

1. **Phân loại theo mục đích sử dụng**: Chia spacing thành các nhóm semantic giúp dễ dàng lựa chọn đúng spacing cho từng trường hợp
2. **Tối ưu cho các trường hợp cụ thể**: Component spacing, layout spacing, inset spacing và gap spacing giúp áp dụng spacing nhất quán cho từng loại element
3. **Dễ dàng bảo trì**: Khi cần thay đổi spacing cho một loại element, chỉ cần thay đổi giá trị của token tương ứng

### Utility Classes

```html
<!-- Margin -->
<div class="m-0">No margin</div>
<div class="m-1">4px margin</div>
<div class="m-4">16px margin</div>

<!-- Padding -->
<div class="p-2">8px padding</div>
<div class="p-4">16px padding</div>

<!-- Gap (for flex/grid containers) -->
<div class="gap-2">8px gap</div>
<div class="gap-4">16px gap</div>
```

## 3. Breakpoints và Responsive Design

### Tokens

Breakpoints được định nghĩa để hỗ trợ responsive design:

- **xs**: 320px (Mobile nhỏ)
- **sm**: 576px (Mobile lớn)
- **md**: 768px (Tablet)
- **lg**: 992px (Desktop nhỏ)
- **xl**: 1200px (Desktop trung bình)
- **2xl**: 1400px (Desktop lớn)

### Container Widths

Các container width tương ứng với mỗi breakpoint:

- **sm**: 540px
- **md**: 720px
- **lg**: 960px
- **xl**: 1140px
- **2xl**: 1320px

### Cách sử dụng

#### Media Queries

```css
@media (min-width: var(--breakpoint-md)) {
  .element {
    /* Styles cho tablet trở lên */
  }
}

@media (min-width: var(--breakpoint-lg)) {
  .element {
    /* Styles cho desktop trở lên */
  }
}
```

#### Responsive Utility Classes

```html
<!-- Hiển thị/ẩn theo device -->
<div class="show-mobile-only">Chỉ hiển thị trên mobile</div>
<div class="hide-mobile">Ẩn trên mobile</div>
<div class="show-desktop-only">Chỉ hiển thị trên desktop</div>

<!-- Container responsive -->
<div class="container">
  <!-- Nội dung sẽ tự động điều chỉnh width theo breakpoint -->
</div>
```

## 4. Colors và Themes

### Color Tokens

Colors được tổ chức thành các nhóm với 7 cấp độ (100-700):

- **Black**: `--color-black-100` đến `--color-black-700`
- **White**: `--color-white-100` đến `--color-white-700`
- **Brand**: `--color-brand-100` đến `--color-brand-700`
- **Secondary**: `--color-secondary-100` đến `--color-secondary-700`
- **Positive**: `--color-positive-100` đến `--color-positive-700`
- **Negative**: `--color-negative-100` đến `--color-negative-700`

### Theme Tokens

Theme tokens sử dụng color tokens để tạo ra các biến semantic:

- **Background**: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, etc.
- **Text**: `--text-primary`, `--text-secondary`, `--text-tertiary`, etc.
- **Stroke**: `--stroke-default`, `--stroke-strong`, `--stroke-brand`, etc.

### Dark Mode

Dark mode được hỗ trợ thông qua attribute `data-theme="dark"` trên thẻ `:root`.

## 5. Border Radius và Shadow

### Border Radius Tokens

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **full**: 9999px (hình tròn)

### Shadow Tokens

- **sm**: Shadow nhỏ
- **md**: Shadow trung bình
- **lg**: Shadow lớn

## Best Practices

1. **Sử dụng tokens thay vì giá trị cứng**:
   ```css
   /* Không nên */
   .element { margin: 16px; }
   
   /* Nên */
   .element { margin: var(--space-4); }
   ```

2. **Sử dụng utility classes khi có thể**:
   ```html
   <!-- Không nên -->
   <p style="font-size: 16px; line-height: 24px;">Text</p>
   
   <!-- Nên -->
   <p class="text-md-medium">Text</p>
   ```

3. **Sử dụng semantic tokens**:
   ```css
   /* Không nên */
   .button { background-color: var(--color-brand-400); }
   
   /* Nên */
   .button { background-color: var(--bg-brand-default); }
   ```

4. **Responsive design**:
   ```css
   /* Sử dụng breakpoint tokens */
   @media (min-width: var(--breakpoint-md)) {
     .element { display: flex; }
   }
   ```

## Tích hợp với Components

Khi xây dựng components, hãy sử dụng design tokens để đảm bảo tính nhất quán:

```jsx
// Button component
const Button = ({ children, variant = 'primary' }) => {
  return (
    <button className={`button button-${variant}`}>
      {children}
    </button>
  );
};

// CSS
.button {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
}

.button-primary {
  background-color: var(--bg-brand-default);
  color: var(--text-inverse);
}

.button-secondary {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}
```

## Kết luận

Design system này cung cấp một nền tảng vững chắc để xây dựng giao diện nhất quán và dễ bảo trì. Bằng cách sử dụng tokens và utility classes, bạn có thể phát triển UI nhanh chóng mà vẫn đảm bảo tính nhất quán trong toàn bộ ứng dụng.