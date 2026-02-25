# frozen_string_literal: true

# Custom Liquid filters for date-based post filtering and obfuscation.
# where_future: posts with date >= cutoff (YYYY-MM-DD)
# where_past: posts with date < cutoff (YYYY-MM-DD)
module Jekyll
  module DateFilters
    def where_future(posts, cutoff_str)
      return [] unless cutoff_str.is_a?(String)
      posts.select { |p| p.date && p.date.strftime("%Y-%m-%d") >= cutoff_str }
    end

    def where_past(posts, cutoff_str)
      return [] unless cutoff_str.is_a?(String)
      posts.select { |p| p.date && p.date.strftime("%Y-%m-%d") < cutoff_str }
    end

    # Convert string to comma-separated char codes for JS obfuscation (anti-spam)
    def to_char_codes(input)
      return "" unless input.is_a?(String)
      input.each_byte.map(&:to_s).join(",")
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilters)
